import { Component, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { ProductsService } from '../services/products/products.service';
import { IStock } from '../services/products/productsSeed';
import { StockService } from '../services/stock/stock.service';

@Component({
  selector: 'app-expiration',
  templateUrl: './expiration.page.html',
  styleUrls: ['./expiration.page.scss'],
})
export class ExpirationPage implements OnInit, ViewWillEnter {
  expirationProducts: IStock[];

  constructor(private stockService: StockService) {
    this.expirationProducts = this.stockService.getExpirationProducts();
  }

  ngOnInit() {
    this.expirationProducts = this.stockService.getExpirationProducts();
  }
  ionViewWillEnter() {
    this.expirationProducts = this.stockService.getExpirationProducts();
  }

}
