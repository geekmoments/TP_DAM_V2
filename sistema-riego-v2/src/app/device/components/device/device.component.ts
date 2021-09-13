import { Component,
         Input,
         Output,
         EventEmitter,
         OnChanges,
         SimpleChanges,
         OnInit
          } from "@angular/core";
import { Device } from "./../../../device.model";


@Component({
  selector:'app-device',
  templateUrl:'./device.component.html',
  styleUrls:['./device.component.scss']
})
export class DeviceComponent implements OnChanges,OnInit{


  @Input() device:Device ; // Recibimos los valores
  @Output() deviceClicked :EventEmitter<any> = new EventEmitter();

  today= new Date();

  constructor()
  {
    console.log('1 constructor');
  }

  ngOnChanges(changes:SimpleChanges){

    console.log('2 ngOnChanges');
    console.log(changes);

  }

  ngOnInit() {
    console.log('3 ngOnInit');
  }



  AddCart(){
    console.log("añadido");
    this.deviceClicked.emit(this.device.id);
  }

}
