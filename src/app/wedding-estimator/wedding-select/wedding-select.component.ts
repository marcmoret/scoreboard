import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-wedding-select',
  templateUrl: './wedding-select.component.html',
  styleUrls: ['./wedding-select.component.css']
})
export class WeddingSelectComponent implements OnInit {

  constructor() { }
  @Output() isSubmitted:boolean =false;
  @Output() isMusic:boolean = false;
  @Output() isHall:boolean = false;

  
  @ViewChild('y') form: NgForm;

  @Output() currentForm = [];
  defaultValue:number = 0;

  onSubmit(form: NgForm){
    
    console.log(this.form.value);
    this.currentForm.push(this.form.value);
    console.log(this.currentForm);
    if(this.form.value.radiomusic === 'none'){
        this.isMusic = false;
    }else{
      this.isMusic = true;
    }
    if(this.form.value.radiohall === '0'){
      console.log(this.form.value.radiohall)
      this.isHall = false;
  }else{
    this.isHall = true;
  }
    
  }

  onClick(){
    this.isSubmitted = true;
  }
  onReset(){
    this.isSubmitted = false;
    this.form.reset();
  }

  ngOnInit() {
    this.isSubmitted = false;
    this.form.reset();
    this.currentForm = [];
  }
}