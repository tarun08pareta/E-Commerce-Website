import { Component } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Observable, Observer } from 'rxjs';
import {map} from 'rxjs/operators'
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  products$:Observable<any>;
  constructor(private productSrv:ProductService){
   this.products$ = this.productSrv.getCatgeory().pipe(
    map((item:any) =>{
      return item.data
    })
  )
  }

  getAllCategory(){

  }
}
