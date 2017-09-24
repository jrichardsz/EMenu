import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { SubMenuModel } from "../../model/SubMenuModel";

/*
  Generated class for the MyCartServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MyCartServiceProvider {
  constructor(public http: Http) { }

  loadSubMenu(SubMenuId): Observable<SubMenuModel[]>{
    return this.http.get("https://samique23.000webhostapp.com/RestAPI/getSubMenu.php?id_list="+JSON.stringify(SubMenuId))
            .map(res => <SubMenuModel[]>res.json());
  }

}
