import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-name',
  templateUrl: '././choose-name.component.html',
  styleUrls:[]
})

export class ChooseNameComponent implements OnInit {

  constructor() { }
  x:number= 0;

  ngOnInit() {
  }

  goal(){

    this.x++;

  }
  reset(){
    this.x  = 0;
  }
}