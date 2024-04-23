import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-products',
  templateUrl: './customer-products.component.html',
  styleUrl: './customer-products.component.css'
})
export class CustomerProductsComponent implements OnInit {
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

  addToCart(productId:number)
  {
   const addToCartObj = {
    "CartId": 0,
    "CustId": 379,
    "ProductId": productId,
    "Quantity": 1,
    "AddedDate": new Date()
   }
   this.prodSrv.addToCart(addToCartObj).subscribe((res:any)=>{
    debugger;
       if(res.result)
        {
          alert('product Add to Cart')
          this.prodSrv.cartUpdated$?.next(true);
        }else{
          alert(res.messsage)
        }
   })
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
   
  }
}
