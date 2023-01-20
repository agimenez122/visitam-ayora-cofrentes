import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RestaurantPageRoutingModule } from './restaurant-routing.module';
import { TranslateModule } from "@ngx-translate/core";
import { RestaurantPage } from './restaurant.page';
import { MaintoolbarComponent } from '../maintoolbar/maintoolbar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantPageRoutingModule,
    TranslateModule
  ],
  declarations: [RestaurantPage,MaintoolbarComponent]
})
export class RestaurantPageModule {}