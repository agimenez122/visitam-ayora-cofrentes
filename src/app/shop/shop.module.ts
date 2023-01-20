import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShopPageRoutingModule } from './shop-routing.module'
import { ShopPage } from './shop.page'
import { MaintoolbarComponent } from '../maintoolbar/maintoolbar.component';
import { TranslateModule } from "@ngx-translate/core";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopPageRoutingModule,TranslateModule
  ],
  declarations: [ShopPage,MaintoolbarComponent]
})
export class ShopPageModule {}
