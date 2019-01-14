import { ChooseNameComponent } from './../choose-name/choose-name.component';
import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TestBed } from '@angular/core/testing';


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  
  @Input() newN: any;
  @Output() user1:number = 0;
  @Output() user2:number = 0;
  

  goal(){
  this.user1++;
  console.log(this.user1);
  }

  reset(){
    this.user1 = 0;
  }
    
    ngOnInit() {
      
    }
    constructor() { }
}
