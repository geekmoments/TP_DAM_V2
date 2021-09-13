import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DevicesService } from 'src/app/core/services/devices/devices.service';
@Component({
  selector: 'app-form-device',
  templateUrl: './form-device.component.html',
  styleUrls: ['./form-device.component.scss']
})
export class FormDeviceComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private devicesService: DevicesService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveDevice(event:Event){
    event.preventDefault();
    if (this.form.valid){
      const device=this.form.value;
      this.devicesService.addDevice(device)
      .subscribe((newDevice) =>{
        console.log(newDevice);
        this.router.navigate(['./admin/devices']);
      });
    }

    console.log(this.form.value)
  }

  private buildForm(){
    this.form =this.formBuilder.group({
      id:['',[Validators.required]],
      image:'',
      title:'',
      location:'',
      description:'',
    });
  }
}
