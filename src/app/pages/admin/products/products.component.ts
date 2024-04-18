import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../../product.interface';
import { Category } from '../../../category.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  categoryList :Category[] =[]
  productList :Product[] =[]
 isSidePannerVisiable:boolean= false;


productObj:any={
  
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": "",
    "categoryName": ""
  }

 constructor( private productSrv:ProductService){
  
 }

 ngOnInit(): void {
     this.getAllCategory()
     this.getProducts()
     
 }

 onSave()
 {
  this.productSrv.saveProduct(this.productObj).subscribe((res:any)=>{
    debugger;
    if(res.result)
      {
        alert('Product Create')
        this.getProducts()
      }
      else{
        alert(res.messsage)
      }
  })
 }
 onEdit(item:any){
  this.productObj = item;
  this.openSidePannel();
 }
 onUpdate()
 {
  this.productSrv.updateProduct(this.productObj).subscribe((res:any)=>{
  debugger;
    if(res.result)
      {
        alert('Product Update')
        this.getProducts()
        
      }
      else{
        alert(res.messsage)
      }
  })
 
 }

 onDelete(item:any){
   const isDelete = confirm('Are you sure want to Delete the item')
   if(isDelete){
    this.productSrv.deleteProduct(item.productId).subscribe((res:any)=>{
      debugger;
        if(res.result)
          {
            alert('Product Delete')
            this.getProducts()
          }
          else{
            alert(res.messsage)
          }
      })
   }
  //  console.log(item.data)
 }
 getAllCategory()
 {
  this.productSrv.getCatgeory().subscribe((res:any)=>{
   this.categoryList= res.data;
  //  console.log(res.data)
  })

 }

 getProducts()
 {
  this.productSrv.getProducts().subscribe((res:any)=>{
   this.productList= res.data;
  //  console.log(res.data)
  })

 }
 openSidePannel()
 {
  this.isSidePannerVisiable= true
 }

 closeSidePannel()
 {
  this.isSidePannerVisiable = false
 }


}
