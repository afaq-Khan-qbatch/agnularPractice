import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingRoutingModule } from './cart-routing-routing.module';
import { CartComponent } from '../cart.component';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    CartRoutingRoutingModule
  ]
})
export class CartRoutingModule { }
