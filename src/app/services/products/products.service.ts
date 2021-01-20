import { Injectable } from '@angular/core';
import { IProduct, products } from './productsSeed';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: IProduct[];

  constructor() {
    this.products = products;
  }

  public getProducts(): IProduct[] {
    return this.products;
  }

  public addProduct(product: IProduct) {
    this.products.push(product);
  }
}
