import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesService } from './services/devices/devices.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    DevicesService
  ]
})
export class CoreModule { }
