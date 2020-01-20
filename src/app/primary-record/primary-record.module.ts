import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimaryRecordPageRoutingModule } from './primary-record-routing.module';

import { PrimaryRecordPage } from './primary-record.page';
import { SrplusHeaderComponent } from '../srplus-header/srplus-header.component';
import { SrplusHeaderModule } from '../srplus-header/srplus-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PrimaryRecordPageRoutingModule,
    SrplusHeaderModule
  ],
  declarations: [PrimaryRecordPage],
})
export class PrimaryRecordPageModule {}
