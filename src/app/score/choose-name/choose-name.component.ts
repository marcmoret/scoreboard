import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-choose-name',
  templateUrl: '././choose-name.component.html',
  styleUrls:['choose-name.component.css']
})

export class ChooseNameComponent implements OnInit {

  @ViewChild('addScore') addScore: ElementRef;

  constructor() { }
  x:number= 0;

  ngOnInit() {
  }

  goal(){

    this.x++;

  }
  onMinus(){
    this.x--;

  }
  reset(){
    this.x  = 0;
  }
  AddScore(){
    this.x =  this.x + +this.addScore.nativeElement.value;
    console.log(this.x);
    this.addScore.nativeElement.value = '';
  }
}