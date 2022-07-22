import { Component, OnInit } from '@angular/core';
import { Carts } from 'src/app/lib/utils/cart';
import { DashboardService } from 'src/app/lib/services/dashboard/dashboard.service';
import { Store } from '@ngrx/store';
import { incrementCount, updateCount, decrementCount } from 'src/app/lib/store/counter.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private service: DashboardService, private store: Store<{ count: number }>) {}
  carts: Carts[] | any; 
  count: number = 0
  getCarts() {
    const token = localStorage.getItem('token') || "";
    this.service.getCarts(token)
    .subscribe(res => {
      this.carts = res
      this.count = this.carts[0]?.cartCount || 0;
      this.store.dispatch(new incrementCount(this.count));
    })
    return this.count;
  }
  ngOnInit(): void {
    this.getCarts()
  }

  inCoun: any

  updateCarts(data: any) {
     this.service.updateCart(data).subscribe(res => {
      this.inCoun = res
      this.count = this.carts[0]?.cartCount || 0;
      const cart = this.carts.find((ele: any) => ele._id == this.inCoun._id)
      const cartIndex = this.carts.indexOf(cart);
      this.carts[cartIndex].quantity = this.inCoun.quantity;
    })
  }

  addCount (cart: Carts) {
    const data = {
      _id: cart._id,
      quantity: cart?.quantity + 1
    }
    this.updateCarts(data)
    this.store.dispatch(new updateCount(1));
  }

  subtractCount (cart: Carts) {
    if(cart.quantity <= 1) return
    const data = {
      _id: cart._id,
      quantity: cart?.quantity - 1
    }
    this.updateCarts(data);
    this.store.dispatch(new decrementCount(1));
  }

  removeCart (cart: Carts) {
    const data = {
      items_Id: cart._id,
    } 
    this.service.removeCarts(data).subscribe();
    this.store.dispatch(new decrementCount(cart?.quantity));
    this.getCarts()
  }

  testcart() {
    console.log('count ==> ', this.count);
  }

}
