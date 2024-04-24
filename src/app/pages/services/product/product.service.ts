import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { Observable, Subject,throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public cartUpdated$ : Subject<boolean> | undefined

  
  getCatgeory()
  {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY)
  }
  getProductBYCategory(id:number)
  {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCTS_BY_CATEGORY+id)
  }
  getProducts()
  {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS. GET_ALL_PRODUCTS)
  }

  saveProduct(obj:any)
  {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.CREATE_PRODUCT,obj)
  }
  updateProduct(obj:any)
  {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.UPDATE_PRODUCT,obj)
  }
  deleteProduct(id:any)
  {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.DELET_PRODUCT+id)
  }

  addToCart(obj:any)
  {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.ADD_TO_CART,obj)
  }
  getCartDataByCusId(custId:number)
  {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_CART_BY_CUST+custId)
  }
  removeProductByCart(custId:number)
  {
    return this.http.get(Constant.API_END_POINT + Constant.METHODS.REMOVE_CART_PRODUCT+custId)
  }
}
