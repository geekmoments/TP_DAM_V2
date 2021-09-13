import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router'

import { DevicesService } from './../../../core/services/devices/devices.service';
import { Device } from './../../../device.model';

//--detallesensor
import * as Highcharts from 'highcharts';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);
//---------FIN------

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit {

  device:Device;

//--detallesensor
  private valorObtenido:number=0;
  public myChart;
  private chartOptions;


//---FIN


  constructor(
      private route:ActivatedRoute,
      private devicesService:DevicesService
    )
  {
//----detallesensor
    setTimeout(()=>{
      console.log("Cambio el valor del sensor");
      this.valorObtenido=60;
      //llamo al update del chart para refrescar y mostrar el nuevo valor
      this.myChart?.update({series: [{
          name: 'kPA',
          data: [this.valorObtenido],
          tooltip: {
              valueSuffix: ' kPA'
          }
          }]});
        },6000);
  //----FIN

  }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>
    {
      const id = params.id;
      this.fetchDevice(id);
      //this.device = this.devicesService.getDevice(id);

    });
  }
  //----detallesensor
  ionViewDidEnter() {
      this.generarChart();
    }
  //-------Fin


  fetchDevice(id:string){

      this.devicesService.getDevice(id)
      .subscribe(device =>{
        this.device = device;
        //console.log(device);
      });
  }

  addDevice(){
    const newDevice:Device={

        id:'5',
        image:'assets/images/device01',
        title: 'newdevice',
        location:'newlocation',
        description:'this is a new location',
    };
    this.devicesService.addDevice(newDevice)
    .subscribe(device=>{
      console.log(device);
    });

  }

  updateDevice(){
    const updateDevice:Partial<Device>={

      id:'5',
      title: 'other title',
      };

    this.devicesService.updateDevice('3',updateDevice)
    .subscribe(device=>{
      console.log(device);
    });

  }
  deleteDevice(){
    this.devicesService.deleteDevice('5')
    .subscribe(rta=>{
      console.log(rta);
    });
  }

//----detallesensor
  generarChart() {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        }
        ,title: {
          text: 'Sensor N° 1'
        }

        ,credits:{enabled:false}


        ,pane: {
            startAngle: -150,
            endAngle: 150
        }
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'kPA'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#55BF3B' // green
        }, {
            from: 10,
            to: 30,
            color: '#DDDF0D' // yellow
        }, {
            from: 30,
            to: 100,
            color: '#DF5353' // red
        }]
    }
    ,

    series: [{
        name: 'kPA',
        data: [this.valorObtenido],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
  }

//----FIN

}
