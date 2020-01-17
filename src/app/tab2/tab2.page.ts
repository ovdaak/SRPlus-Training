import { Component } from '@angular/core';
import { RegionService } from '../services/region.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private regionService: RegionService) {

    this.regionService.getRegions().subscribe(res => {
      console.log(res);
    });

  }

}
