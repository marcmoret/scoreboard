import { ScoreComponent } from './../score/score.component';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
import { TestBed } from '@angular/core/testing';


@Component({
  selector: 'app-choose-name',
  templateUrl: './choose-name.component.html',
  styleUrls: ['./choose-name.component.css']
})

export class ChooseNameComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  x:number= 0;

  goal(){

    this.x++;

  }
  reset(){
    this.x  = 0;
  }
}
