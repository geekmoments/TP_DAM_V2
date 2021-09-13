import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';

import { TableComponent } from './components/table/table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { DevicesListComponent } from './components/devices-list/devices-list.component';
import { FormDeviceComponent } from './components/form-device/form-device.component';


@NgModule({
  declarations: [
    AddDeviceComponent,
    NavComponent,
    TableComponent,
    DashboardComponent,
    DevicesListComponent,
    FormDeviceComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,


  ]
})
export class AdminModule { }
