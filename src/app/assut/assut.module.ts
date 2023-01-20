import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AssutPageRoutingModule } from './assut-routing.module';
import { AssutPage } from './assut.page';
import { TranslateModule } from "@ngx-translate/core";
import { MaintoolbarComponent } from '../maintoolbar/maintoolbar.component';
import { CommonsService } from '../services/commons.service'
import { PlayerService } from '../services/player.service';
import { AdMobFree } from '@ionic-native/admob-free/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssutPageRoutingModule,TranslateModule
  ],
  declarations: [AssutPage,MaintoolbarComponent],
  providers: [CommonsService,PlayerService,AdMobFree,]
})
export class AssutPageModule {}
