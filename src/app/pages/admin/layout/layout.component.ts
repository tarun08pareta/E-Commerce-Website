import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../../services/product/product.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent  {
 
  searchText: string = '';

  constructor(private prodSrv: ProductService) {}

  searchProducts() {
    this.prodSrv.setSearchQuery(this.searchText);
  }
}
 
  
 
  

