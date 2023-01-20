import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import  *  as  data  from  '../../bd/hotels.json'

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  hoteles = data.db.reverse()
  
  constructor(private translate: TranslateService) { }

  ngOnInit() { 
    console.log(data.db)
  }
}
