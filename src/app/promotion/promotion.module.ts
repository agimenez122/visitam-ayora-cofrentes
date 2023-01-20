import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PromotionPageRoutingModule } from './promotion-routing.module';
import { PromotionPage } from './promotion.page';
import { MaintoolbarComponent } from '../maintoolbar/maintoolbar.component';
import { TranslateModule } from "@ngx-translate/core";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromotionPageRoutingModule,TranslateModule
  ],
  declarations: [PromotionPage,MaintoolbarComponent]
})
export class PromotionPageModule {}
