import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
// import { Route } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent implements OnInit {
  productList: any[] = [];
  categoryList:any[]=[]
  
  constructor(private prodSrv: ProductService,private router:Router) {}

  ngOnInit(): void {
    this.getAllProductr();
    this.getAllCategory()
    // console.log(this.categoryList)
  }
  navigateToProducts(id:number)
  {
this.router.navigate(['/product',id])
  }
  getAllProductr() {
    this.prodSrv.getProducts().subscribe((res: any) => {
      this.productList = res.data;
    });
  }

  getAllCategory()
  {
    this.prodSrv.getCatgeory().subscribe((res:any)=>{
      this.categoryList= res.data
    })
    // console.log(this.categoryList)
  }
  
}
