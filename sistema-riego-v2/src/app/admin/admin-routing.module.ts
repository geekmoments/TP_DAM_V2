import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes-material-form-nav-dashboard-table
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';

import { DevicesListComponent } from './components/devices-list/devices-list.component';
import { FormDeviceComponent } from './components/form-device/form-device.component';

const routes: Routes = [

  {
    path: '',
    component: NavComponent,
    children: [
    {
      path: 'create',
      component: AddDeviceComponent
    },
    {
      path: '',
      component:DashboardComponent
    },
    {
      path: 'table',
      component: TableComponent
    },
    {
      path: 'devices',
      component: DevicesListComponent
    },
    {
      path: 'devices/create',
      component: FormDeviceComponent
    }

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
