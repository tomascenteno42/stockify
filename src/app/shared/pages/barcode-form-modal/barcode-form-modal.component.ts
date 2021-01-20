import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { IStock } from 'src/app/services/products/productsSeed';

@Component({
  selector: 'app-barcode-form-modal',
  templateUrl: './barcode-form-modal.component.html',
  styleUrls: ['./barcode-form-modal.component.scss'],
})
export class BarcodeFormModalComponent implements OnInit {

  minimumDate: string;
  ionicForm: FormGroup;
  barcode: string;

  constructor(private modalController: ModalController, public toastController: ToastController, private navParams: NavParams) {
    this.validateForm();
    this.barcode = this.navParams.get("barcode");
    this.minimumDate = new Date().toISOString();

  }

  ngOnInit() {
  }

  dismiss(data?: any) {
    this.modalController.dismiss(data);
  }

  addProductToStock() {
    // FIXME: add entire data object
    const { name, price, boxSize, quantity, expiresAt } = this.ionicForm.value;
    const data: IStock = {
      product: { name, boxSize, price, barcode: this.barcode },
      quantity,
      expiresAt
    }
    this.dismiss(data);
    this.presentToast(name);
  }
  // TODO:Implement constant variable for duration
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
      boxSize: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
      ]),
      price: new FormControl("", [
        Validators.required,
        Validators.minLength(1)
      ]),

      quantity: new FormControl("", [
        Validators.required,
        Validators.minLength(1)
      ]),

      expiresAt: new FormControl("", [
        Validators.required
      ]),
    });
  }

}
