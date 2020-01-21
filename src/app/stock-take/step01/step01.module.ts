import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Step01PageRoutingModule } from './step01-routing.module';

import { Step01Page } from './step01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Step01PageRoutingModule
  ],
  declarations: [Step01Page]
})
export class Step01PageModule {}
