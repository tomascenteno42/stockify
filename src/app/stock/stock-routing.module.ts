import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockPage } from './stock.page';

const routes: Routes = [
  {
    path: '',
    component: StockPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockPageRoutingModule { }
