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
  score:number= 0;

  ngOnInit() {
  }

  goal(){

    this.score++;

  }
  onMinus(){
    this.score--;

  }
  reset(){
    this.score = 0;
  }
  onAddScore(){
    this.score =  this.score + +this.addScore.nativeElement.value;
    console.log(this.score);
    this.addScore.nativeElement.value = '';
  }
  onDelete(index:number){
    console.log(index);
    this.names.splice(index,1);
  }
}