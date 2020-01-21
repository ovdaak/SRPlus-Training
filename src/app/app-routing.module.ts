import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'logon-page',
    loadChildren: () => import('./logon/logon.module').then( m => m.LogonModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'stock-take',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'step01'
      },
      {
        path: 'step01',
        loadChildren: () => import('./stock-take/step01/step01.module').then( m => m.Step01PageModule)
      },
      {
        path: 'step02',
        loadChildren: () => import('./stock-take/step02/step02.module').then( m => m.Step02PageModule)
      },
      {
        path: 'step03',
        loadChildren: () => import('./stock-take/step03/step03.module').then( m => m.Step03PageModule)
      },
      {
        path: 'category-search',
        loadChildren: () => import('./category-search/category-search.module').then( m => m.CategorySearchPageModule)
      },
      {
        path: '**',
        redirectTo: 'step01'
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
