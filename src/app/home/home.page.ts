import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Router} from "@angular/router"
import { Storage } from '@ionic/storage';
import { AdmobService } from '../services/admob.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public activeLang = 'es';
  public id : number;

  constructor(
    private router: Router,
    private translate: TranslateService, 
    private storage: Storage,
    private admobService: AdmobService  ) 
    { 
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.idLoad() 
  }

  public async go(url){
    let lang= await this.storage.get('language')
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.router.navigate([url])
  }

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }

  async isId1() {
    return await this.id === 1
  }

  ngOnInit() {
    //AL CARGAR LA PAGINA MOSTRAMOS BANNER
    this.admobService.MostrarBanner();
    this.admobService.MostrarInterstitial();
    this.idLoad()
    console.log("ngOnInit")
  }
   
  async idLoad() {
    this.id = await this.storage.get('id')
    console.log("hola cara bola inicio "+this.id)
  }

}
