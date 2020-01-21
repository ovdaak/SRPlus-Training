import { Component } from '@angular/core';
import { RegionInterface, RegionResponseInterface } from '../shared/api-client/interfaces/region.interface';
import { RegionService } from '../shared/api-client/services/region.service';
import { AppStateService } from '../+state/appstate.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    public menus$ = this.appState.menus$;
    public regions$ = this.appState.regions$;
    public categories$ = this.appState.categories$;
    public institutes$ = this.appState.institutes$;
    public locations$ = this.appState.locations$;
    public phases$ = this.appState.phases$;
    public stock$ = this.appState.stock$;

  constructor(private appState: AppStateService) {

  }

  refreshData() {

    this.appState.fetchMenus();

    this.appState.fetchRegions();

    const categoriesRequest = {parentId: '1'};
    this.appState.fetchCategories(categoriesRequest);

    const instituteRequest = {room: '1'};
    this.appState.fetchInstitutes(instituteRequest);

    const locationRequest = {room: '1'};
    this.appState.fetchLocations(locationRequest);

    this.appState.fetchPhases();

    const stockRequest = {
      search: '',
      category1Id: '',
      category2Id: '',
      category3Id: ''
    };
    this.appState.fetchStock(stockRequest);

  }

}
