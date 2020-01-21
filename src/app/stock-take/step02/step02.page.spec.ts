import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Step02Page } from './step02.page';

describe('Step02Page', () => {
  let component: Step02Page;
  let fixture: ComponentFixture<Step02Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step02Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Step02Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
