import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewMyCartPage } from "../view-my-cart/view-my-cart";
import { MainMenuPage } from "../main-menu/main-menu";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ViewCheckOut = function(){
    this.navCtrl.push(ViewMyCartPage);
  }

  ViewMenu = function(){
    this.navCtrl.push(MainMenuPage);
  }

}
