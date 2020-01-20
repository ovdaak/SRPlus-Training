import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrimaryRecordPage } from './primary-record.page';

describe('PrimaryRecordPage', () => {
  let component: PrimaryRecordPage;
  let fixture: ComponentFixture<PrimaryRecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryRecordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrimaryRecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
