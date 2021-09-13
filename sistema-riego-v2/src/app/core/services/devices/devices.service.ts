import { Injectable } from '@angular/core';
import { Device } from './../../../device.model';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {


  constructor(
    private http: HttpClient
  ) { }

  getAllDevices(){

    return this.http.get<Device[]>(`${environment.url_api}/devices`);
  }
  getDevice(id:string){

    return this.http.get<Device>(`${environment.url_api}/devices/${id}`);
  }

  addDevice(device:Device){
    return this.http.post(`${environment.url_api}/devices`,device );
  }

  updateDevice(id:string,changes:Partial<Device>){

    return this.http.put(`${environment.url_api}/devices/${id}`,changes);
  }

  deleteDevice(id:string){
    return this.http.delete(`${environment.url_api}/devices/${id}`);
  }
}
