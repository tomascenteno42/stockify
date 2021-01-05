import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpirationPageRoutingModule } from './expiration-routing.module';

import { ExpirationPage } from './expiration.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpirationPageRoutingModule,
    SharedModule
  ],
  declarations: [ExpirationPage]
})
export class ExpirationPageModule { }
