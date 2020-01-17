import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemlistPagePage } from './itemlist-page.page';

const routes: Routes = [
  {
    path: '',
    component: ItemlistPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemlistPagePageRoutingModule {}
