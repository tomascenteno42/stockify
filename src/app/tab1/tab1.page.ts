import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StockModalPage } from '../shared/stock-modal/stock-modal.page';

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
  currentTarget: T;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

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
