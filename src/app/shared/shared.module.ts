import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BarcodeFormModalComponent } from './pages/barcode-form-modal/barcode-form-modal.component';
import { StockItemComponent } from './components/stock-item/stock-item.component';
import { StockFormModalPage } from './pages/stock-form-modal/stock-form-modal.page';



@NgModule({
  declarations: [HeaderComponent, StockItemComponent, StockFormModalPage, BarcodeFormModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,

  ],
  exports: [CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, HeaderComponent, StockItemComponent, StockFormModalPage, BarcodeFormModalComponent]
})
export class SharedModule { }
