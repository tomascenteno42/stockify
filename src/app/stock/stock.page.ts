import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StockModalPage } from '../shared/pages/stock-modal/stock-modal.page';

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

  constructor(public modalController: ModalController) { }

  filterData(event: HTMLElementEvent<HTMLInputElement>) {
    console.log(event.target.value);
  }

  addStock(event: HTMLElementEvent<HTMLButtonElement>) {
    this.openModal();
  }

  private async openModal() {
    const modal = await this.modalController.create({
      component: StockModalPage,
      // componentProps: { player: player }
    });
    return await modal.present();
  }
}
