import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage  {
  public activeLang = 'es';
  constructor(private storage: Storage, private router: Router,private translate: TranslateService) {    
    //this.translate.setDefaultLang(this.activeLang);
  }
  
  public async go(url , id){
    await this.storage.create();
    let lang= await this.storage.get('language')
    await this.storage.set('id',id)
    
    this.translate.use(lang);
    this.router.navigate([url])
    
  }

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }
}
