import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainMenuPage } from "../pages/main-menu/main-menu";
import { MainMenuServiceProvider } from '../providers/main-menu-service/main-menu-service';
import { HttpModule } from '@angular/http';
import { SubMenuPage } from "../pages/sub-menu/sub-menu";
import { SubMenuServiceProvider } from '../providers/sub-menu-service/sub-menu-service';
import { ViewSubMenuPage } from "../pages/view-sub-menu/view-sub-menu";
import { MyCartServiceProvider } from '../providers/my-cart-service/my-cart-service';
import {ViewMyCartPage} from '../pages/view-my-cart/view-my-cart';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainMenuPage,
    SubMenuPage,
    ViewSubMenuPage,
    ViewMyCartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainMenuPage,
    SubMenuPage,
    ViewSubMenuPage,
    ViewMyCartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MainMenuServiceProvider,
    HttpModule,
    SubMenuServiceProvider,
    MyCartServiceProvider,
    IonicStorageModule
  ]
})
export class AppModule {}
