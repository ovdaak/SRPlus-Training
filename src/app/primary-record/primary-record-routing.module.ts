import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimaryRecordPage } from './primary-record.page';

const routes: Routes = [
  {
    path: '',
    component: PrimaryRecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimaryRecordPageRoutingModule {}
