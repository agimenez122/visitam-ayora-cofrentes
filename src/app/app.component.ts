import { Component } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx'; 

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  constructor(private platform    : Platform,
              private splashScreen: SplashScreen,
              private statusBar   : StatusBar,
              private translateService: TranslateService,
              private storage: Storage,
              private admobFree: AdMobFree) 
  {
    this.sideMenu();
    this.initializeApp();
      
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pushAdmob();
  }

  pushAdmob(){
    console.log("entrando en push addmob");
    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-9669223673392187/9368819404',
      isTesting: false,
      autoShow: true,
     };
     this.admobFree.banner.config(bannerConfig);
     console.log("configurado");
     this.admobFree.banner.prepare()
       .then(() => {
        this.admobFree.banner.show();
        console.log("show banner");
       })
       .catch(e => console.log(e));
  }

  async initializeApp() {
    // Idioma
    await this.storage.create();
    let lang = await this.storage.get('language')?await this.storage.get('language'):"es"
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sideMenu()
  {
    this.navigate =
    [
      {
        title : "INICIO",
        url   : "/inicio",
        icon  : "home"
      },{
        title : "LUGARES_DE_INTERES",
        url   : "/home",
        icon  : "pin"
      },
      {
        title : "SERVICIS",
        url   : "/restaurant",
        icon  : "restaurant"
      },
      {
        title : "CONTACT",
        url   : "/contact",
        icon  : "mail"
      },
      {
        title : "RESERVA_ALLOTJAMENT",
        url   : "/reserve",
        icon  : "calendar"
      },
      {
        title : "TIENDA",
        url   : "/shop",
        icon  : "card"
      },
      {
        title : "IDIOMA",
        url   : "/idioma",
        icon  : "flag"
      }
      

    ]
  }
}
