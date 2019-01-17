import { Component, OnInit, ViewChild, Input, Injectable, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-wedding-options',
  templateUrl: '././wedding-options.component.html',
  styleUrls: ['././wedding-options.component.css']
})
@Injectable()
export class WeddingOptionsComponent implements OnInit {
  
@ViewChild('f') form: NgForm;
  constructor() {}

  @Input() test = [];
  @Input() isSubmitted:boolean;
  @Output() hopefully = new EventEmitter();

  expectedCost: number = 0;
  flowers: number;
  guests;
  balance:number = 0;

  

  ngOnInit() {

    console.log('form' + this.guests);
    console.log(this.test);
  }

  onReset(){
    this.hopefully.emit(this.isSubmitted = false);
    console.log(this.isSubmitted);
    this.form.reset();
    this.test = [];
   
  }
  
  onSubmit(form:NgForm){
    for(let x of this.test)
    {
      this.guests = x.guests;
      console.log('guests:' + x.guests);
    }
    if(form.value.optradio === 'true'){
     this.flowers = (this.guests/10 * 200)
     this.expectedCost = (this.guests * form.value.hall) + +form.value.dj + this.flowers;
     this.balance = this.balance - this.expectedCost;
    }else{
      this.expectedCost = (this.guests * form.value.hall) + +form.value.dj;
      this.balance = this.balance - this.expectedCost;
    }
    console.log(form.value);
    console.log(this.expectedCost);
    //console.log(this.result);
  }
}