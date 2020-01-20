import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogonPagePageRoutingModule } from './logon-page-routing.module';

import { LogonPagePage } from './logon-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogonPagePageRoutingModule
  ],
  declarations: [LogonPagePage]
})
export class LogonPagePageModule {}
