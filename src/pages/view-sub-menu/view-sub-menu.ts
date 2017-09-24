import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubMenuServiceProvider } from "../../providers/sub-menu-service/sub-menu-service";
import { SubMenuModel } from "../../model/SubMenuModel";
/**
 * Generated class for the ViewSubMenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-sub-menu',
  templateUrl: 'view-sub-menu.html',
})
export class ViewSubMenuPage {
  public menuParam;
  sMenuModel:SubMenuModel;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public subMenuService: SubMenuServiceProvider) {
      this.menuParam = navParams.get("SubMenuId");

      this.subMenuService.loadSubMenu(this.menuParam).subscribe(subMenu => {
        // this.SubMenuName = subMenu[0].sub_menu_name;
        // this.Desc = subMenu[0].sub_menu_desc;
        // this.TimeNos = subMenu[0].time_nos;
        // this.Time = subMenu[0].time_taken;
        // this.price = subMenu[0].unit_price;
        this.sMenuModel = subMenu[0];
    });
  }

}
