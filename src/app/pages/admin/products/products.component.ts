import { Component, OnInit,Input, output, Output } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../../product.interface';
import { Category } from '../../../category.interface';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  categoryList :Category[] =[]
  productList :Product[] =[]
  filteredProductList: Product[] = [];
  searchText: string = '';


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

  
 constructor( private productSrv:ProductService,private dialog: MatDialog){
  
 }

 ngOnInit(): void {
     this.getAllCategory()
     this.getProducts()
    
     this.productSrv.searchQuery$.subscribe(query => {
      this.searchText = query;
      this.searchProducts();
    });
    
 }

 // search product code start
 searchProducts() {
  if (!this.searchText.trim()) {
    this.filteredProductList = this.productList;
  } else {
    this.filteredProductList = this.productList.filter(product =>
      product.productName.toLowerCase().includes(this.searchText.trim().toLowerCase())
    );
  }
 
}

 // search product code end
 


 onNewAdd(): void {
  const dialogRef = this.dialog.open(EditDialogComponent, {
    width: '45%',
    height:'520px',
    enterAnimationDuration:'1000ms',
    exitAnimationDuration : '1000ms',
    data: { productObj: { // Initialize with empty productObj
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
    } }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });

  // console.log(this.productList)
}


 onEdit(item:any){
  // this.isSidePannerVisiable= true
  this.productObj = item;
  const dialogRef = this.dialog.open(EditDialogComponent, {
    width: '45%',
    height:'520px',
    enterAnimationDuration:'1000ms',
    exitAnimationDuration : '1000ms',
    data: { productObj: this.productObj } // Pass productObj to the dialog
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });
 
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



}
