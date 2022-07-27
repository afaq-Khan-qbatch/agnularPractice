import { Component, OnInit } from '@angular/core';
import { DashboardService } from './lib/services';
import { Store, select } from '@ngrx/store';
import { setLogin, incrementCount } from './lib/store/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  carts: any
  cartCount: number = 0
  isLogin: number = 0
  color: string = '#fde3bb'
  constructor(
    private service: DashboardService,  
    private store: Store<{ count: number, isLogin: number }>
    ) {
    store.pipe(select('count')).subscribe(value => {
      this.cartCount = (value as unknown as number);
    })
    store.pipe(select('isLogin')).subscribe(value => {
      this.isLogin = (value as unknown as number);
    })
    const tokenLength = localStorage.getItem('token')?.length || 0
    this.store.dispatch(new setLogin(tokenLength))
  }

  logOut() {
    localStorage.setItem('token', '');
    const tokenLength = localStorage.getItem('token')?.length || 0
    this.store.dispatch(new setLogin(tokenLength))
    this.store.dispatch(new incrementCount(0));
  }

  async ngOnInit() {
 
  }
}
