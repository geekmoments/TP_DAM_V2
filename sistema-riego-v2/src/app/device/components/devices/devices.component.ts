import { Component, OnInit } from '@angular/core';
import { Device } from './../../../device.model';

import { DevicesService } from 'src/app/core/services/devices/devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  devices:Device[]=[];

  constructor(
    private devicesService:DevicesService
  ) { }

  ngOnInit(): void {
    this.fetchDevices();
  }

  clickDevice(id:number){
    console.log('device');
    console.log(id);
  }
  fetchDevices(){
    this.devicesService.getAllDevices()
    .subscribe(devices =>{
      //console.log(devices)
      this.devices = devices;
    })

  }
}
