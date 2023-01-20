import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { IdiomaPageRoutingModule } from './idioma-routing.module';
import { MaintoolbarComponent } from '../maintoolbar/maintoolbar.component';

import { IdiomaPage } from './idioma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdiomaPageRoutingModule,TranslateModule
  ],
  declarations: [IdiomaPage,MaintoolbarComponent]
})
export class IdiomaPageModule {}
