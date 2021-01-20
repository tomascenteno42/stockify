import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';
import { ModalController, NavController } from '@ionic/angular';
import { ProductsService } from '../services/products/products.service';
import { IProduct, IStock } from '../services/products/productsSeed';
import { StockService } from '../services/stock/stock.service';
import { BarcodeFormModalComponent } from '../shared/pages/barcode-form-modal/barcode-form-modal.component';
import { StockFormModalPage } from '../shared/pages/stock-form-modal/stock-form-modal.page';
type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
  currentTarget: T;
}

@Component({
  selector: 'app-stock',
  templateUrl: 'stock.page.html',
  styleUrls: ['stock.page.scss']
})
export class StockPage {

  products: IProduct[];
  stock: IStock[];
  filteredStock: IStock[];

  constructor(public modalController: ModalController, private productsService: ProductsService, private stockService: StockService, private barcodeScanner: BarcodeScanner) {
    this.stock = this.stockService.getCurrentStock();
    this.products = this.productsService.getProducts();
  }

  filterData(event: HTMLElementEvent<HTMLInputElement>) {
    this.stock = this.stock.filter(({ product }) => product.name.includes(event.target.value))
  }

  // addStockWithForm(event: HTMLElementEvent<HTMLButtonElement>) {
  //   this.openModal(ProductModalPage).then((params) => {
  //     if (params.data) {
  //       const productToAdd = this.productsService.getProducts().filter((product) => product.name === params.data.name)[0];
  //       if (productToAdd) {
  //         const stockItem: IStock = {
  //           product: productToAdd,
  //           quantity: params.data.quantity,
  //           expiresAt: params.data.expiresAt
  //         }
  //         this.stock = this.stockService.addProductToStock(stockItem);
  //       }
  //       console.log(this.stock);
  //     }
  //   });
  // }
  addStockWithScan() {
    this.barcodeScanner.scan().then((data: BarcodeScanResult) => {
      const productInStock: IStock = this.stock.filter(({ product }) => product.barcode === data.text)[0];
      if (productInStock) {
        this.openModal(StockFormModalPage, { product: productInStock.product }).then((params) => {
          this.stockService.addProductToStock(params.data);
        })
      } else {
        //FIXME: COMPONENT to PAGE
        this.openModal(BarcodeFormModalComponent, { barcode: data.text }).then((params) => {
          this.productsService.addProduct(params.data.product);
          this.stock = this.stockService.addProductToStock(params.data);
        })
      }
    }, (error) => {
      console.error(error);
    })
  }

  public async openModal(modalToDisplay: any, data?: any) {
    const modal = await this.modalController.create({
      component: modalToDisplay,
      componentProps: data
    });
    modal.present();
    return await modal.onDidDismiss();
  }
}