import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from "@angular/router"
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.page.html',
  styleUrls: ['./idioma.page.scss'],
})
export class IdiomaPage implements OnInit {

  constructor(
    private router: Router, 
    private translate: TranslateService,
    private storage: Storage) { 
  }

  audioActivado: any
  audio: any;

  exitClicked(){
    navigator['app'].exitApp();
  }

  public async cambiarLenguaje(lang) {
    await this.storage.set('language',lang)

    this.translate.use(await this.storage.get('language'));
    this.router.navigate(['/inicio'])
  }

  getUrl(){
    return this.router.url
  }

  ngOnInit() {
    this.audio = new Audio();
    this.audioActivado=false

    if (this.translate.currentLang==="es"){
      this.audio.src = '../assets/audioguias/AZUD_ES.mp3';
    }else{
      this.audio.src = '../assets/audioguias/AZUD_CT.mp3';
    }
    this.audio.load();
  }

  ngOnDestroy() {
    if(this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }

}

