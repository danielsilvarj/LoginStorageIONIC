import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogadoPage } from './logado.page';

describe('LogadoPage', () => {
  let component: LogadoPage;
  let fixture: ComponentFixture<LogadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
