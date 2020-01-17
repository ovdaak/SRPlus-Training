import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemlistPagePage } from './itemlist-page.page';

describe('ItemlistPagePage', () => {
  let component: ItemlistPagePage;
  let fixture: ComponentFixture<ItemlistPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemlistPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemlistPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
