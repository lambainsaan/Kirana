import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MatGridListModule, MatListModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatDialogModule, MatSelectModule } from '@angular/material';
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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ItemService, PromotionService],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent
  ],
})
export class AppModule { }
