import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StockFormModalPage } from './stock-form-modal.page';

describe('StockFormModalPage', () => {
  let component: StockFormModalPage;
  let fixture: ComponentFixture<StockFormModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockFormModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StockFormModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
