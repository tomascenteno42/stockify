import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StockModalPage } from './stock-modal.page';

describe('StockModalPage', () => {
  let component: StockModalPage;
  let fixture: ComponentFixture<StockModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StockModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
