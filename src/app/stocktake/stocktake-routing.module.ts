import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StocktakePage } from './stocktake.page';

const routes: Routes = [
  {
    path: '',
    component: StocktakePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StocktakePageRoutingModule {}
