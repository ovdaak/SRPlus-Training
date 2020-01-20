import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogonPagePage } from './logon-page.page';

describe('LogonPagePage', () => {
  let component: LogonPagePage;
  let fixture: ComponentFixture<LogonPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogonPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogonPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
