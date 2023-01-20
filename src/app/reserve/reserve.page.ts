import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import  *  as  data  from  '../../bd/hotels.json';
import { CallNumber } from '@ionic-native/call-number/ngx';
import {Router} from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx/index';


@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.page.html',
  styleUrls: ['./reserve.page.scss'],
})
export class ReservePage implements OnInit {

  hoteles = data.db.reverse()
  
  constructor(
    private router: Router, 
    private translate: TranslateService,
    private callNumber: CallNumber,
    private theInAppBrowser: InAppBrowser
    ) { }

  ngOnInit() { 
  }

  public go(url) {
    let lang = this.translate.currentLang;
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.router.navigate([url])
  }

  callPhoneNumber(phoneNumber: string ){
    console.log("llamando a "+phoneNumber)
      this.callNumber.callNumber(phoneNumber, true)
      .then(() => console.log('Llamada exitosa!'))
      .catch(() => console.log('Error al intentar llamar a '));
  }

  openBrowser(url: string ){
    console.log("abriendo "+url)
    this.theInAppBrowser.create(url, '_self','location=no');
  }

  whatsappSend(phoneNumber: string ){
    console.log("whastssapp a "+phoneNumber.slice(1))
    window.location.href='https://api.whatsapp.com/send?phone='+phoneNumber.slice(1)
  }
}
