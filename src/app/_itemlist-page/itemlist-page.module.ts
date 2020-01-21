import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemlistPagePageRoutingModule } from './itemlist-page-routing.module';

import { ItemlistPagePage } from './itemlist-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemlistPagePageRoutingModule
  ],
  declarations: [ItemlistPagePage]
})
export class ItemlistPagePageModule {}
