import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MatGridListModule, MatListModule, MatCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import 'hammerjs';
import { ItemsComponent } from './items/items.component';
import { ItemService } from './services/item.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,

  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
