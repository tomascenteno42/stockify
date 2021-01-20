import { Injectable } from '@angular/core';
import { IStock, stock } from '../products/productsSeed';

@Injectable({
    providedIn: 'root'
})
export class StockService {
    private stock: IStock[];

    constructor() {
        this.stock = stock;
    }

    public addProductToStock(stockItem: IStock): IStock[] {
        const index = this.stock.indexOf(this.stock.filter(({ product }) => product.name.includes(stockItem.product.name))[0]);

        if (index !== -1 && this.sameDate(stockItem.expiresAt, this.stock[index].expiresAt)) {
            this.stock[index].quantity += stockItem.quantity;
            return this.stock;
        }

        this.stock.push(stockItem);
        return this.stock;
    }

    public getCurrentStock(): IStock[] {
        return this.stock;
    }

    public getExpirationProducts(): IStock[] {
        return this.stock.filter((product) => new Date(product.expiresAt).getMonth() === new Date().getMonth() + 1);
    }

    sameDate(d1: string, d2: string) {
        const date1 = new Date(d1);
        const date2 = new Date(d2);
        // FIXME:Check if there is a prettier way to do this.
        return date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear() && date1.getDay() === date2.getDay();
    }
}
