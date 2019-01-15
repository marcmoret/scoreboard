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
  ngOnInit() {
      
  }
  constructor() { }
  
  @Output() names: any[] =[];
  @ViewChild('name') addname2: ElementRef;
  @Output() newName: any;
  

  onAddName(value: any){

    //console.log(this.addname2.nativeElement.value);
    this.names.push(this.addname2.nativeElement.value);
    console.log(this.names);
    this.newName = this.addname2.nativeElement.value;
    console.log(this.newName);
  }

  @Output() user1:number = 0;
  
  goal(){
  this.user1++;
  console.log(this.user1);
  }

  reset(){
    this.user1 = 0;
  }
    
    
}
