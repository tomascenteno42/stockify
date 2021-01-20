import { Component, Input, OnInit } from '@angular/core';
import { IProduct, IStock } from 'src/app/services/products/productsSeed';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss'],
})
export class StockItemComponent implements OnInit {
  @Input() stockItem: IStock;
  constructor() { }

  ngOnInit() {

  }

}
