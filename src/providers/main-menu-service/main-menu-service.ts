import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { MainMenuModel } from "../../model/MainMenuModel";

/*
  Generated class for the MainMenuServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MainMenuServiceProvider {

  constructor(public http: Http) { }

  load(): Observable<MainMenuModel[]>{
    return this.http.get("https://samique23.000webhostapp.com/RestAPI/getMenuList.php")
      .map(res => <MainMenuModel[]>res.json());
  }

}
