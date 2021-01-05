import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-stock-modal',
  templateUrl: './stock-modal.page.html',
  styleUrls: ['./stock-modal.page.scss'],
})
export class StockModalPage implements OnInit {
  minimumDate: string;
  ionicForm: FormGroup;

  constructor(private modalController: ModalController, public toastController: ToastController) {
    this.validateForm();
    this.minimumDate = new Date().toISOString();
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  addProductToStock(event) {
    this.presentToast(this.ionicForm.value.name);
  }

  private async presentToast(product: string) {
    const toast = await this.toastController.create({
      message: `${product} added to stock list.`,
      duration: 2000
    });
    toast.present();
  }

  validateForm() {
    this.ionicForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
      ]),
      quantity: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
      ]),
      expiracyDate: new FormControl("", [
        Validators.required,
      ])
    });
  }
}
