import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StockPage } from './stock.page';

import { StockPageRoutingModule } from './stock-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductsService } from '../services/products/products.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@NgModule({
  imports: [
    StockPageRoutingModule,
    SharedModule],
  declarations: [StockPage],
  providers: [ProductsService, BarcodeScanner]
})
export class StockPageModule { }
