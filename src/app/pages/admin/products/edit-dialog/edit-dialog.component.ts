import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../../../product.interface';
import { ProductService } from '../../../services/product/product.service';
import { Category } from '../../../../category.interface';
import { ProductsComponent } from '../products.component';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrl: './edit-dialog.component.css'
})
export class EditDialogComponent implements OnInit {

  constructor(private productSrv:ProductService,
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

ngOnInit(): void {
    this.getAllCategory(),
    this.productObj = this.data.productObj;
}
  categoryList:Category []=[]
  productList :Product[] =[]

  productObj:Product={
  
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

 

  resetProductObj()
  {

    this.productObj={
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
    
  }

  onClose(): void {
    this.dialogRef.close();
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
  // console.log(this.getProducts)
}
  onUpdate()
  {
  this.productSrv.updateProduct(this.productObj).subscribe((res:any)=>{
  debugger;
    if(res.result)
      {
        alert('Product Update')
        this.onClose()
        this.resetProductObj();
        // this.closeSidePannel()

      }
      else{
        alert(res.messsage)
      }
  })
 
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
    // console.log(res.data)
   })
}
}