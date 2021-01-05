import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpirationPage } from './expiration.page';

const routes: Routes = [
  {
    path: '',
    component: ExpirationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpirationPageRoutingModule {}
