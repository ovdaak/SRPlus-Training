import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Step03PageRoutingModule } from './step03-routing.module';

import { Step03Page } from './step03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Step03PageRoutingModule
  ],
  declarations: [Step03Page]
})
export class Step03PageModule {}
