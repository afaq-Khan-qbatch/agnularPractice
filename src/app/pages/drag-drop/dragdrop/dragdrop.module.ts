import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragdropRoutingModule } from './dragdrop-routing.module';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DragdropRoutingModule,
    MatSelectModule
  ]
})
export class DragdropModule { }
