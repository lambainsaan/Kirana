import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule, MatGridListModule, MatListModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatDialogModule, MatSelectModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { ItemService } from './services/item.service';
import { PromotionService } from './services/promotion.service';

import { AppRoutingModule } from './app-routing/app-routing.module';

import 'hammerjs';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { LoginComponent } from './login/login.component';
import { OrderformComponent } from './orderform/orderform.component';
import { HttpModule } from '@angular/http';
import { baseURL } from './shared/baseurl';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';
import { OrderService } from './services/order.service';

import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';
import { HighlightDirective } from './src/app/directives/highlight.directive';
import { CartComponent } from './cart/cart.component';
import { CartsummaryComponent } from './cartsummary/cartsummary.component';
import { CartitemdetailComponent } from './cartitemdetail/cartitemdetail.component';
import {HttpClientModule} from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ItemdetailComponent,
    LoginComponent,
    OrderformComponent,
    HighlightDirective,
    CartComponent,
    CartsummaryComponent,
    CartitemdetailComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    HttpClientModule  
  ],
  providers: [ItemService, PromotionService, ProcessHttpmsgService, OrderService, { provide: 'BaseURL', useValue: baseURL }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent
  ],
})
export class AppModule { }
