import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StockModalPage } from './pages/stock-modal/stock-modal.page';



@NgModule({
  declarations: [HeaderComponent, StockModalPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,

  ],
  exports: [HeaderComponent, StockModalPage]
})
export class SharedModule { }
