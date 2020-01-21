import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SrplusHeaderComponent } from './srplus-header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [SrplusHeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ], exports: [SrplusHeaderComponent]
})
export class SrplusHeaderModule { }
