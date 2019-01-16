
import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  constructor() { }

  
  
  @Output() names = [];
  @ViewChild('name') addname2: ElementRef;
  @Output() newName: any;
  @Output() score = [0];

  @Output() user1:number = 0;
  ngOnInit() {
  }

  onReset() {
    this.names.length = 0;
    this.names = [];
  }

  onAddName() {
    this.names.push(this.addname2.nativeElement.value);
    console.log(this.names);
    this.newName = this.addname2.nativeElement.value;
    console.log(this.newName);
  }
  goal() {
  this.user1++;
  this.score.push(this.user1);
  console.log(this.score);
  }

  reset() {
    this.user1 = 0;
  }
}
