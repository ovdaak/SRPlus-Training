import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StocktakePage } from './stocktake.page';

describe('StocktakePage', () => {
  let component: StocktakePage;
  let fixture: ComponentFixture<StocktakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocktakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StocktakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
