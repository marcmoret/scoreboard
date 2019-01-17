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
  
  @ViewChild('y') form: NgForm;

  onSubmit(){
    
    console.log(this.form.value);

  }

  onClick(){
    this.isSubmitted = true;
  }
  onReset(){
    this.isSubmitted = false;
  }

  ngOnInit() {
    this.isSubmitted = false;
  }

}