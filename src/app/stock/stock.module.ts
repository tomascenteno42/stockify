import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StockPage } from './stock.page';

import { StockPageRoutingModule } from './stock-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    StockPageRoutingModule,
    SharedModule
  ],
  declarations: [StockPage]
})
export class StockPageModule { }
