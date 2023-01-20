import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import  *  as  data  from  '../../bd/hotels.json';
import { CallNumber } from '@ionic-native/call-number/ngx';
import {Router} from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx/index';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  hoteles = data.db.reverse()
  
  constructor(
    private router: Router, 
    private translate: TranslateService,
    private theInAppBrowser: InAppBrowser
    ) {
      
     }

  ngOnInit() { 
  }

  public go(url) {
    let lang = this.translate.currentLang;
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.router.navigate([url])
  }


  openBrowser(url: string ){
    console.log("abriendo "+url)
    this.theInAppBrowser.create(url, '_self','location=no, toolbar= si');
  }

  
}
