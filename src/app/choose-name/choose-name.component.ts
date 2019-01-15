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

  // @Output() names: any[] =[];
  // @ViewChild('name') addname2: ElementRef;
  // @Output() newName: any;
  // lasttry = new EventEmitter();
  // @Output() test1;

  // onAddName(value: any){

  //   //console.log(this.addname2.nativeElement.value);
  //   this.names.push(this.addname2.nativeElement.value);
  //   console.log(this.names);
  //   this.newName = this.addname2.nativeElement.value;
  //   console.log(this.newName);
  // }

}
