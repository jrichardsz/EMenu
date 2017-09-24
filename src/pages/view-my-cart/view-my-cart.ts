import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyCartServiceProvider } from "../../providers/my-cart-service/my-cart-service";
import { SubMenuModel } from "../../model/SubMenuModel";
import{AlertController} from "ionic-angular";
/**
 * Generated class for the ViewMyCartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-my-cart',
  templateUrl: 'view-my-cart.html',
})
export class ViewMyCartPage {
  SubMenuList: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
                  public storage: Storage, public myCartService:MyCartServiceProvider, public alertCtrl:AlertController) {
    this.storage.ready().then(() => {
         this.storage.get('CartItem').then((val) => {
           this.SubMenuList = val;
          //  this.myCartService.loadSubMenu(val).subscribe(subMenus => {
          //     this.SubMenuList = subMenus;
          //  });
         });

         this.storage.remove('CartItem');
    });
  }

  alertConfirm(id) {
    let alert = this.alertCtrl.create({
      title: 'Remove Item',
      message: 'Are you sure to remove?',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            this.SubMenuList = this.SubMenuList.filter(item => item.SubMenuId !== id);
          }
        }
      ]
    });
    alert.present();
}

ionViewWillLeave() {
  this.storage.ready().then(() => {
         this.storage.set('CartItem', this.SubMenuList);
  });
}

}
