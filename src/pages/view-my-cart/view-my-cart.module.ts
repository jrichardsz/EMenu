import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewMyCartPage } from './view-my-cart';

@NgModule({
  declarations: [
    ViewMyCartPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewMyCartPage),
  ],
})
export class ViewMyCartPageModule {}
