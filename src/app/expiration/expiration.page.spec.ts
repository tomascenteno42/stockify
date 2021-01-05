import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpirationPage } from './expiration.page';

describe('ExpirationPage', () => {
  let component: ExpirationPage;
  let fixture: ComponentFixture<ExpirationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpirationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpirationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
