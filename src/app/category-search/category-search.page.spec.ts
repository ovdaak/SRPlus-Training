import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategorySearchPage } from './category-search.page';

describe('CategorySearchPage', () => {
  let component: CategorySearchPage;
  let fixture: ComponentFixture<CategorySearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategorySearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
