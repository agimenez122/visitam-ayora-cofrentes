import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { TranslateService } from '@ngx-translate/core';
import  *  as  data  from  '../../bd/services.json';
import { Router } from "@angular/router";
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage {

  services = data.services

  constructor(private router: Router, public popover: PopoverController, private callNumber: CallNumber, private translate: TranslateService) { }

  exitClicked(){
    navigator['app'].exitApp();
  }
  
  public go(url) {
    let lang = this.translate.currentLang;
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.router.navigate([url])
  }

  CreatePopover(url) {
    this.popover.create({
      component: PopoverComponent, componentProps: { key1: url },
      showBackdrop: false
    }).then((popoverElement) => {
      popoverElement.present();

    })
  }

  callPhoneNumber(phoneNumber: string ){
    console.log("llamando a "+phoneNumber)
      this.callNumber.callNumber(phoneNumber, true)
      .then(() => console.log('Llamada exitosa!'))
      .catch(() => console.log('Error al intentar llamar a '));
  }

  whatsappSend(phoneNumber: string ){
    console.log("whastssapp a "+phoneNumber.slice(1))
    window.location.href='https://api.whatsapp.com/send?phone='+phoneNumber.slice(1)
  }
}
