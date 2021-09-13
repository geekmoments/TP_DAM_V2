import { Component, OnInit } from '@angular/core';
import { DevicesService } from 'src/app/core/services/devices/devices.service';


@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss']
})
export class DevicesListComponent implements OnInit {

  devices=[];
  displayedColumns: string[] = ['id', 'title', 'location','actions'];
  constructor(
    private devicesService:DevicesService

  ) { }

  ngOnInit(): void {
    this.fetchDevices();
  }

  fetchDevices(){
    this.devicesService.getAllDevices()
    .subscribe(devices=>{
      this.devices =devices;
    });
  }
  deleteDevice(id:string){
    this.devicesService.deleteDevice(id)
    .subscribe(rts=>{
      this.fetchDevices();
      console.log(rts);
    });
  }
}
