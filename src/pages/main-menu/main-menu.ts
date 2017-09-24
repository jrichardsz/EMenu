import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MainMenuModel } from "../../model/MainMenuModel";
import { MainMenuServiceProvider } from "../../providers/main-menu-service/main-menu-service";
import { SubMenuPage } from "../sub-menu/sub-menu";
/**
 * Generated class for the MainMenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-menu',
  templateUrl: 'main-menu.html',
})
export class MainMenuPage {

  mainMenuList: MainMenuModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
                public MainMenuService: MainMenuServiceProvider) 
  {
      MainMenuService.load().subscribe(mainMenus => { 
            this.mainMenuList = mainMenus;
      });
  }

  showSubMenu = function(menuId){
    this.navCtrl.push(SubMenuPage, {menId: menuId});
  };

}
