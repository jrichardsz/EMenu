import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { SubMenuModel } from "../../model/SubMenuModel";

/*
  Generated class for the SubMenuServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SubMenuServiceProvider {

  constructor(public http: Http) { }

  load(menuId): Observable<SubMenuModel[]>{
    return this.http.get("https://samique23.000webhostapp.com/RestAPI/getSubMenu.php?menu_id="+menuId)
            .map(res => <SubMenuModel[]>res.json());
  }

  loadSubMenu(SubMenuId): Observable<SubMenuModel>{
    return this.http.get("https://samique23.000webhostapp.com/RestAPI/getSubMenu.php?sub_menu_id="+SubMenuId)
            .map(res => <SubMenuModel>res.json());
  }
}
