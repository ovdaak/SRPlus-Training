import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StocktakePageRoutingModule } from './stocktake-routing.module';

import { StocktakePage } from './stocktake.page';
import { SrplusHeaderComponent } from '../srplus-header/srplus-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    StocktakePageRoutingModule
  ],
  declarations: [StocktakePage, SrplusHeaderComponent]
})
export class StocktakePageModule {
}
