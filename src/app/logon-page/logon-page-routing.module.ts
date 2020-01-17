import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogonPagePage } from './logon-page.page';

const routes: Routes = [
  {
    path: '',
    component: LogonPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogonPagePageRoutingModule {}
