import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    // loadChildren: () => import('./logon-page/logon-page.module').then( m => m.LogonPagePageModule)
    loadChildren: () => import('./stocktake/stocktake.module').then( m => m.StocktakePageModule)
  },
  {
    path: 'logon-page',
    loadChildren: () => import('./logon-page/logon-page.module').then(m => m.LogonPagePageModule)
  },
  {
    path: 'stocktake',
    loadChildren: () => import('./stocktake/stocktake.module').then(m => m.StocktakePageModule)
  },  {
    path: 'primary-record',
    loadChildren: () => import('./primary-record/primary-record.module').then( m => m.PrimaryRecordPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
