import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx'; 
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx/index';
import { PopoverComponent } from '../popover/popover.component';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-assut',
  templateUrl: './assut.page.html',
  styleUrls: ['./assut.page.scss'],
})
export class AssutPage implements OnInit {

  constructor(
      private translate: TranslateService, 
      private router: Router, 
      private admobFree: AdMobFree,
      private theInAppBrowser: InAppBrowser,
      public popover: PopoverController
    ) { 
      this.pushAdmob();
    }

  audioActivado: any
  audio: any;
  module: any;

 
  getUrl(){
    return this.router.url
  }

  ngOnInit() {
    this.audio = new Audio();
    this.audioActivado=false

    if(this.getUrl()==='/assut'){
      this.module = 'AZUD'
    }
    if(this.getUrl()==='/torre'){
      this.module = 'TORRE'
    }
    if(this.getUrl()==='/iglesia'){
      this.module = 'IGLESIA'
    }
    if(this.getUrl()==='/compuertas'){
      this.module = 'CASA_COMPORTES'
    }
    if(this.getUrl()==='/creueta'){
      this.module = 'CREU_ALTA'
    }
    if(this.getUrl()==='/ermita'){
      this.module = 'ERMITA'
    }
    if(this.getUrl()==='/poblat'){
      this.module = 'POBLAT'
    }  

    if (this.translate.currentLang==="es"){
      this.audio.src = '../assets/audioguias/'+this.module+'_ES.mp3';
    }else{
      this.audio.src = '../assets/audioguias/'+this.module+'_CT.mp3';
    }
    this.audio.load();
  }

  playAudio() {
    this.audio.play();
    this.audio.loop = false;
  }

  reproductor(){
    if(this.audioActivado){
      this.audioActivado=false
    }else{
      this.audioActivado=true
    }
  }

  repvisible(){
    return this.audioActivado
  }

  stopAudio() {
    this.audio.pause();
  }

  ngOnDestroy() {
    if(this.audio) {
      this.audio.pause();
      this.audio = null;
    }
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

  openBrowser(url: string ){
    console.log("abriendo "+url)
    this.theInAppBrowser.create(url, '_self','location=no');
  }

  CreatePopover(url) {
    this.popover.create({
      component: PopoverComponent, componentProps: { key1: url },
      showBackdrop: false
    }).then((popoverElement) => {
      popoverElement.present();

    })
  }

}