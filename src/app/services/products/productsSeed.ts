export let products: IProduct[] = [{
    name: "Pepsi 2.25L",
    boxSize: 6,
    price: 100,
    barcode: "7791813423058"
}, {
    name: "Tabaco virginia blend 35g",
    boxSize: 12,
    price: 2400,
    barcode: "4030700139560"
}];

export let stock: IStock[] = [{
    product: products[0],
    quantity: 10,
    expiresAt: "2021-02-06T12:23:44.856-03:00"
}, {
    product: products[1],
    quantity: 3,
    expiresAt: "2021-03-06T12:25:48.553-03:00"

}]

export interface IProduct {
    name: string;
    boxSize: number;
    price: number;
    barcode: string;
}

export interface IStock {
    product: IProduct;
    quantity: number;
    expiresAt: string;
}