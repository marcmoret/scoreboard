import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-choose-name',
  templateUrl: '././choose-name.component.html',
  styleUrls:['choose-name.component.css']
})

export class ChooseNameComponent implements OnInit {

  @ViewChild('addScore') addScore: ElementRef;
  @Input() playerName:any;
  @Input() indexplayer:any;
  @Input() names:[];

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
  onDelete(index:number){
    console.log(index);
    this.names.splice(index,1);
  }
}