import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images:string[] = [
    'assets/images/banner01.png',
    'assets/images/banner01.png',
    'assets/images/banner01.png'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
