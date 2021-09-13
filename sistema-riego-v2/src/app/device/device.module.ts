import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceComponent } from './components/device/device.component';
import { DeviceDetailComponent } from './components/device-detail/device-detail.component';
import { DevicesComponent } from './components/devices/devices.component';

import { SharedModule } from './../shared/shared.module'
import { DeviceRoutingModule } from './device-routing.module'
import { MaterialModule } from '../material/material.module';



@NgModule(
  {
    declarations: [
       DeviceComponent,
       DeviceDetailComponent,
       DevicesComponent

    ],
    imports: [
      SharedModule,
      CommonModule,
      DeviceRoutingModule,
      MaterialModule
    ]
  })
export class DeviceModule
{


}
