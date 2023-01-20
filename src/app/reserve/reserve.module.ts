import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReservePageRoutingModule } from './reserve-routing.module';
import { ReservePage } from './reserve.page';
import { MaintoolbarComponent } from '../maintoolbar/maintoolbar.component';
import { TranslateModule } from "@ngx-translate/core";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservePageRoutingModule,TranslateModule
  ],
  declarations: [ReservePage,MaintoolbarComponent]
})
export class ReservePageModule {}
