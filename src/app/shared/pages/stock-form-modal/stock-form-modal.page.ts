import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { IProduct, IStock } from 'src/app/services/products/productsSeed';

@Component({
  selector: 'app-stock-form-modal',
  templateUrl: './stock-form-modal.page.html',
  styleUrls: ['./stock-form-modal.page.scss'],
})
export class StockFormModalPage implements OnInit {
  ionicForm: FormGroup;
  minimumDate: string;
  product: IProduct;

  constructor(private modalController: ModalController, private toastController: ToastController, private navParams: NavParams) {
    this.validateForm();
    this.minimumDate = new Date().toISOString();
    this.product = this.navParams.get("product");
  }

  ngOnInit() {
  }

  validateForm() {
    this.ionicForm = new FormGroup({
      quantity: new FormControl("", [
        Validators.required,
        Validators.minLength(1)
      ]),
      expiresAt: new FormControl("", [
        Validators.required
      ]),
    });
  }

  dismiss(data?: any) {
    this.modalController.dismiss(data);
  }

  addProductToStock() {
    const data: IStock = {
      product: this.product,
      quantity: this.ionicForm.value.quantity,
      expiresAt: this.ionicForm.value.expiresAt
    }
    this.dismiss(data);
    this.presentToast(this.ionicForm.value.name);
  }

  private async presentToast(product: string) {
    const toast = await this.toastController.create({
      message: `${product} added to stock list.`,
      duration: 2000
    });
    toast.present();
  }

}
