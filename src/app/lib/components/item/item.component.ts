import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { Items } from 'src/app/common/constants/items';
import { Items } from 'src/app/lib/utils/items';
import { DashboardService } from 'src/app/lib/services/dashboard/dashboard.service';
import { Store, select } from '@ngrx/store';
import { updateCount  } from 'src/app/lib/store/counter.actions';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Items | undefined
  // @Output() deleteItem: EventEmitter<Items> = new EventEmitter();
  // @Output() updateCount: EventEmitter<Items> = new EventEmitter();
  count: number = 1;
  cartCount: number = 0;
  constructor(private service: DashboardService, private store: Store<{ count: number }>) {
  }

  ngOnInit(): void {
  }

  addToCart(item: Items | undefined){
    let token: string = ''
    token = localStorage?.getItem("token") || '';
    if(!token) {
      token = (Math.random() + 1).toString(36).substring(7);
      localStorage.setItem("token", token);
    }
    const userData = {
      id: item?._id,
      userId: token,
      angular: true,
    }
    this.store.dispatch(new updateCount(1));
   this.service.addToCart(userData)
    .subscribe(response => {
    })
  }

  
  addCount () {
    this.count = this.count + 1;
  }

  subtractCount () {
   if(this.count > 1) this.count = this.count - 1;
  }


}


    // this.updateCount.emit(item);

    // this.deleteItem.emit(item);