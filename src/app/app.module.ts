import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ItemComponent } from './lib/components';
import { CartComponent } from './pages/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from './lib/services';
import { StoreModule } from '@ngrx/store';
import { counterReducer, setLogin } from './lib/store/counter.reducer';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { HighlightDirective } from './lib/Directives/highlight.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroFormComponent } from './lib/components/hero-form/hero-form.component';
import { CheckDeactivteServise, checkActiveAuth } from './lib/guard';
import { DragDropComponent } from './pages/drag-drop/drag-drop.component';
import { NgFileDragDropModule } from  'ng-file-drag-drop';
import { NgxFileDragDropModule } from 'ngx-file-drag-drop';
import { RxjsPracticeComponent } from './pages/rxjs-practice/rxjs-practice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { ChartsComponent } from './pages/charts/charts.component';
import { NgChartsModule } from 'ng2-charts';
// import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemComponent,
    // CartComponent,
    SignInComponent,
    SignUpComponent,
    HighlightDirective,
    HeroFormComponent,
    DragDropComponent,
    RxjsPracticeComponent,
    ChartsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ 
      count: counterReducer, 
      isLogin: setLogin 
    }),
    FormsModule,
    ReactiveFormsModule,
    NgFileDragDropModule,
    NgxFileDragDropModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatGridListModule,
    MatSelectModule,
    NgChartsModule
  ],
  providers: [
    DashboardService, 
    CheckDeactivteServise,
    checkActiveAuth,
    CartComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
