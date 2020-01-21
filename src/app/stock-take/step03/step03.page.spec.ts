import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Step03Page } from './step03.page';

describe('Step03Page', () => {
  let component: Step03Page;
  let fixture: ComponentFixture<Step03Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step03Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Step03Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
