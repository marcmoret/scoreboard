import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() user1:number = 0;
  @Output() user2:number = 0;

  goal1(){
    
  this.user1++;
  console.log(this.user1);

  }
  goal2(){
    
    this.user2++;
    console.log(this.user2);
  
    }
    reset1(){
      this.user1 = 0;
    }
    reset2(){
      this.user2 = 0;
    }

}
