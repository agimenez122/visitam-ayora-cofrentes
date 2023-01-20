import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'maintoolbar',
  templateUrl: './maintoolbar.component.html',
  styleUrls: ['./maintoolbar.component.scss'],
})
export class MaintoolbarComponent implements OnInit {

  constructor(private translate: TranslateService, 
    private storage: Storage, private router: Router) { }
  audioActivado: any
  audio: any;
  
  getUrl() {
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
}
