import { NgModule } from '@angular/core';

import { ExpirationPageRoutingModule } from './expiration-routing.module';

import { ExpirationPage } from './expiration.page';
import { SharedModule } from '../shared/shared.module';
import { ProductsService } from '../services/products/products.service';
import { StockService } from '../services/stock/stock.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ExpirationPageRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ExpirationPage],
  providers: [ProductsService, StockService]
})
export class ExpirationPageModule { }
