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
  categoryList: any[] = [];
  productList: any[] = [];
  cartList: any[] = [];

  constructor(private prodSrv: ProductService, private router: Router) {
    this.prodSrv.cartUpdated$?.subscribe((res: any) => {
      this.getCartByCustomer();
    });
  }
  //   isDropdownOpen = false;

  //   toggleDropdown() {
  //     this.isDropdownOpen = !this.isDropdownOpen;
  // }
  ngOnInit(): void {
    this.getAllCategory();
    this.getAllCategory();
    this.getCartByCustomer();
    // console.log(this.cartList)
  }
  navigateToProducts(id: number) {
    this.router.navigate(['/product', id]);
  }

  getCartByCustomer() {
    this.prodSrv.getCartDataByCusId(379).subscribe((res: any) => {
      this.cartList = res.data;
    });
  }
  remove(cartId: number) {
    this.prodSrv.removeProductByCart(cartId).subscribe((res:any) => {
      this.getCartByCustomer();
    });
  }
  getAllProductr() {
    this.prodSrv.getProducts().subscribe((res: any) => {
      this.productList = res.data;
    });
  }

  getAllCategory() {
    this.prodSrv.getCatgeory().subscribe((res: any) => {
      this.categoryList = res.data;
    });
    // console.log(this.categoryList)
  }

  goToAdminLogin()
  {
    this.router.navigateByUrl('/login')
  }
}
