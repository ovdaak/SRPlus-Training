import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Step03Page } from './step03.page';

const routes: Routes = [
  {
    path: '',
    component: Step03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Step03PageRoutingModule {}
