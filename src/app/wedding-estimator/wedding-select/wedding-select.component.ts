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
  @Output() isBand:boolean = false;

  
  @ViewChild('y') form: NgForm;

  @Output() currentForm = [];
  defaultValue:number = 0;

  onSubmit(form: NgForm){
    
    
    this.currentForm.push(this.form.value);
    //Validates if Dj is selected
    if(this.form.value.radiomusic === 'none'){
        this.isMusic = false;
    }else if(this.form.value.radiomusic === 'band'){
      this.isBand = true;
  }else{
    this.isMusic = true;
  }

    //Validates if Band is selected
    

    //Validates if Hall is not selected

    if(this.form.value.radiohall === '0'){
      
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
    this.isMusic = false;
    this.isHall = false;
    this.isBand = false;
  }
}