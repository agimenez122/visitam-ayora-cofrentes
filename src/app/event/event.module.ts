import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventPageRoutingModule } from './event-routing.module';
import { EventPage } from './event.page';
import { MaintoolbarComponent } from '../maintoolbar/maintoolbar.component';
import { TranslateModule } from "@ngx-translate/core";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventPageRoutingModule,TranslateModule
  ],
  declarations: [EventPage,MaintoolbarComponent]
})
export class EventPageModule {}
