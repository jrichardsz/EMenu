import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewMyCartPage } from "../view-my-cart/view-my-cart";
import { MainMenuPage } from "../main-menu/main-menu";
import { Platform} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, platform: Platform) {
      platform.ready().then(() => {

          let notificationOpenedCallback = (jsonData) => {
            console.log(jsonData);
          };

          if (window['plugins']) {
              window['plugins'].OneSignal.startInit("e6aa154b-e26a-4ff7-974d-1f75222e4f2b")
                  .handleNotificationOpened(notificationOpenedCallback)
                  .endInit();
          }
      });
  }

  ViewCheckOut = function(){
    this.navCtrl.push(ViewMyCartPage);
  }

  ViewMenu = function(){
    this.navCtrl.push(MainMenuPage);
  }

}
