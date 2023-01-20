import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PromotionPage } from './promotion.page';

describe('PromotionPage', () => {
  let component: PromotionPage;
  let fixture: ComponentFixture<PromotionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PromotionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
