import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'stock',
        loadChildren: () => import('../stock/stock.module').then(m => m.StockPageModule)
      },
      // {
      //   path: "stock/product",
      //   loadChildren: () => import("../product/product.module").then(m => m.ProductPageModule)
      // },
      {
        path: "expiration",
        loadChildren: () => import("../expiration/expiration.module").then(m => m.ExpirationPageModule)
      },
      {
        path: "sales",
        loadChildren: () => import("../sales/sales.module").then(m => m.SalesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/stock',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/stock',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
