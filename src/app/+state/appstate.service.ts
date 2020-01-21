import { Injectable } from '@angular/core';
import { GlobalState } from './globalstate.service';
import { UserInterface } from '../shared/api-client/interfaces/user.interface';
import { RegionInterface } from '../shared/api-client/interfaces/region.interface';
import { MenuInterface } from '../shared/api-client/interfaces/menu.interface';
import { WareneingangCategoryInterface, WareneingangCategoryRequestInterface } from '../shared/api-client/interfaces/stock/category.interface';
import { WareneingangInstituteInterface, WareneingangInstituteRequestInterface } from '../shared/api-client/interfaces/stock/institute.interface';
import { WareneingangLocationsInterface } from '../shared/api-client/interfaces/stock/location.interface';
import { WareneingangPhasesInterface } from '../shared/api-client/interfaces/stock/phase.interface';
import { WareneingangArticleInterface } from '../shared/api-client/interfaces/stock/stock.interface';
import { map } from 'rxjs/operators';
import { RegionService } from '../shared/api-client/services/region.service';
import { MenuService } from '../shared/api-client/services/menu.service';
import { CategoryService } from '../shared/api-client/services/stock/category.service';
import { InstituteService } from '../shared/api-client/services/stock/institute.service';

export interface AppStateInterface {
  user: UserInterface;
  regions: RegionInterface[];
  menus: MenuInterface[];
  categories: WareneingangCategoryInterface[];
  institutes: WareneingangInstituteInterface[];
  locations: WareneingangLocationsInterface[];
  phases: WareneingangPhasesInterface[];
  stock: WareneingangArticleInterface[];
}

@Injectable({
  providedIn: 'root'
})
export class AppStateService extends GlobalState<AppStateInterface> {

  regions$ = this.select('regions');

  constructor(private regionService: RegionService,
              private menuService: MenuService,
              private categoriesService: CategoryService,
              private institutesService: InstituteService) {
    super();
   }

   fetchRegions() {
    this.regionService.getRegions().subscribe(res => {
      this.setState({regions: res.regions});
    });
  }

  fetchMenus() {
    this.menuService.getMenu().subscribe(res => {
      this.setState({menus: res.menus});
    });
  }

  fetchCategories(categoriesRequest: WareneingangCategoryRequestInterface) {
    this.categoriesService.getCategories(categoriesRequest).subscribe(res => {
      this.setState({categories: res.categories});
    });
  }

  fetchInstitutes(institutesRequest: WareneingangInstituteRequestInterface) {
    this.institutesService.getInstitutes(institutesRequest).subscribe(res => {
      this.setState({institutes: res.institutes});
    });
  }

}
