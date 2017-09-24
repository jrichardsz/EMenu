import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SubMenuServiceProvider } from "../../providers/sub-menu-service/sub-menu-service";
import { SubMenuModel } from "../../model/SubMenuModel";
import { ViewSubMenuPage } from "../view-sub-menu/view-sub-menu";
import { MyCartServiceProvider } from '../../providers/my-cart-service/my-cart-service';
import { Storage } from '@ionic/storage';
import{AlertController} from "ionic-angular";
/**
 * Generated class for the SubMenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sub-menu',
  templateUrl: 'sub-menu.html',
})
export class SubMenuPage {

  public menuParam;
  SubMenuList: SubMenuModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
                  public subMenuService: SubMenuServiceProvider, public storage: Storage
                  , public alertCtrl:AlertController) {
    this.menuParam = navParams.get("menId");

    this.subMenuService.load(this.menuParam).subscribe(subMenus => {
        this.SubMenuList = subMenus;
    });
  }

  viewDetails = function(SubId){
    this.navCtrl.push(ViewSubMenuPage, {SubMenuId: SubId });
  }

  public CartItemArray: any[] = [];
  addToCard = function(Item){
    if(this.CartItemArray.length == 0){
      this.rebindIds();
    }

    if(this.CartItemArray.length > 0){
        if(this.checkExist(Item) == false){
          this.CartItemArray.push(Item);  
        }
    }
    else{
        this.CartItemArray.push(Item);
    }

    this.storage.ready().then(() => {
         this.storage.set('CartItem', this.CartItemArray);
    });

    this.showAlert();
  }

  checkExist = function(Item){
      for(var i = 0; i < this.CartItemArray.length; i++) {
          if(this.CartItemArray[i].SubMenuId == Item.SubMenuId){
            return true;
          }
        }
        return false;
  }

  rebindIds = function(){
    this.storage.ready().then(() => {
        this.storage.get('CartItem').then((val) => {
            val.forEach(e => {
              this.CartItemArray.push(e);
            });
        });
    });    
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Add to cart',
      message: 'This item added to cart',
      buttons: [
        {
          text: 'ok',
          role: 'cancel'
        }
      ]
    });
    alert.present();
}

}
