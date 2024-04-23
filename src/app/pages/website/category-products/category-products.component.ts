import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css',
})
export class CategoryProductsComponent {
  activeCategoryId: number = 0;
  products:any[]=[]
  constructor(
    private activatedRoute: ActivatedRoute,
    private prodSrv: ProductService
  ) {
    this.activatedRoute.params.subscribe((res: any) => {
      debugger;
      this.activeCategoryId = res.id;
    });
    this.loadProducts()
  }

  loadProducts()
  {
    this.prodSrv.getProductBYCategory(this.activeCategoryId).subscribe((res:any)=>{
  this.products=res.data
    })
  }
}
