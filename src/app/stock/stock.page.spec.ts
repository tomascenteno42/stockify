import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StockPage } from './stock.page';

describe('StockPage', () => {
  let component: StockPage;
  let fixture: ComponentFixture<StockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
