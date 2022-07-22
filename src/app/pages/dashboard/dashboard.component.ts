import { 
  Component, 
  OnInit,
  Output, 
  EventEmitter, 
  AfterContentChecked,
  AfterContentInit
} from '@angular/core';
import { DashboardService } from 'src/app/lib/services/dashboard/dashboard.service';
// import { Items } from '../../common/constants/items';
import { Items } from 'src/app/lib/utils/items';
import { Store } from '@ngrx/store';
import { incrementCount } from 'src/app/lib/store/counter.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit /* AfterContentChecked, AfterContentInit */{
  items: Items[] | any
  constructor(
    private service: DashboardService,
    private store: Store<{ count: number }>,
    private _Activatedroute: ActivatedRoute) { }
  count: number = 0
  carts: any;
  description: string = '';
  id: string | null = '';
  desc: any
  async ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      if (this.id) {
        this.service.getDescription(this.id).subscribe(res => {
          this.desc = res
          this.description = this.desc.description
        })
      }
    });

    this.service.getProducts()
      .subscribe(response => {
        this.items = response;
      });

    const token = localStorage.getItem('token') || "";
    this.service.getCarts(token)
      .subscribe(async res => {
        this.carts = res;
        this.count = this.carts[0]?.cartCount || 0;
        this.store.dispatch(new incrementCount(this.count));
      })
  }


  deleteItem(delItem: Items) {

    let index: number = 0;
    index = this.items?.indexOf(delItem);
    this.service.addToCart(delItem)
      .subscribe(response => {
      })
  }

  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked')
  // }

  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit')
  // }

}
