import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { 
  GET_ITEMS,
  CART_URL, 
  GET_CART_URL, 
  GET_DESC_URL,
  REMOVE_CART_URL,
  UPDATE_CART_URL
 } from '../../constants';
import { Carts } from '../../utils/cart';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }
  getProducts() {
    return this.httpClient.get(GET_ITEMS);
  }

  addToCart(item: any) {

    const httpOptions = {
      headers: new HttpHeaders({
        'x-auth-token': `bearer ${item.userId}`
      })
    };
    return this.httpClient.post(CART_URL, item, httpOptions);
  }

  getCarts(token: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-auth-token': `bearer ${token}`
      })
    };

    return this.httpClient.post<Carts>(GET_CART_URL,'', httpOptions);
  }

  updateCart(data: unknown) {
    return this.httpClient.post(UPDATE_CART_URL, data);
  }

  removeCarts(data: any) {
    return this.httpClient.post(REMOVE_CART_URL, data);
  }

  getDescription(id: string | null) {
    return this.httpClient.get(GET_DESC_URL + `${id}`);
  }

}
