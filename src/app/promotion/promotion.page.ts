import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import  *  as  data  from  '../../bd/hotels.json'

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.page.html',
  styleUrls: ['./promotion.page.scss'],
})
export class PromotionPage implements OnInit {

  hoteles = data.db.reverse()
  
  constructor(private translate: TranslateService) { }

  ngOnInit() { 
    console.log(data.db)
  }
}
