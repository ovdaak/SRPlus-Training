import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimaryRecordPageRoutingModule } from './primary-record-routing.module';

import { PrimaryRecordPage } from './primary-record.page';
import { SrplusHeaderModule } from '../shared/srplus-header/srplus-header.module';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyIonicModule} from '@ngx-formly/ionic';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PrimaryRecordPageRoutingModule,
    SrplusHeaderModule,
    FormlyModule.forRoot(),
    FormlyIonicModule
  ],
  declarations: [PrimaryRecordPage]
})
export class PrimaryRecordPageModule {}
