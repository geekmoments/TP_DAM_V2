import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title='sistema-de-riego-v2';
  items = ['item1','item2','item3'];

  power =10;
  constructor() {

  }

  ngOnInit(): void {
  }
  addDevice()
  {
    this.items.push(this.title);
  }
removeDevice(index:number)
  {

      this.items.splice(index, 1);
  }

}
