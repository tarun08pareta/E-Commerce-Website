import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnInit {
  searchText: string = '';
  location: any;
  public lat: any;
  public lng: any;

  // constructor(private prodSrv: ProductService) {}
  constructor(private prodSrv: ProductService) {}

  ngOnInit(): void {
    this.getLocation();
  }

  searchProducts() {
    this.prodSrv.setSearchQuery(this.searchText);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            this.prodSrv
              .getLocation(latitude, longitude)
              .subscribe((data: any) => {
                const place = data.display_name;
                this.location = ` Location: ${place}`;
              });

            console.log(
              'Latitude: ' +
                position.coords.latitude +
                'Longitude: ' +
                position.coords.longitude
            );
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            console.log(this.lat);
            console.log(this.lng);
          }
        },
        (error) => console.log(error)
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
}
