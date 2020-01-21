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

    public regions$ = this.appState.regions$;

  constructor(private appState: AppStateService) {

  }

  refreshRegions(){

    this.appState.fetchRegions();

  }

}
