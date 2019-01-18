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
  budget = 0;
  limo = 0;
  showBudget:boolean = false;
  

  ngOnInit() {
    console.log(this.test);
  }

  onReset(){
    this.hopefully.emit(this.isSubmitted = false);
    console.log(this.isSubmitted);
    this.form.reset();
    this.test = [];
    this.bringToZero();
   
  }
  bringToZero(){

    this.expectedCost = 0;
    this.budget = 0;
    this.balance = 0;
    this.limo = 0;
    this.showBudget = false;  
  }
  
  onSubmit(form:NgForm){
    for(let x of this.test)
    {
      this.guests = x.guests;
      console.log('guests:' + x.guests);
      this.budget = x.budget;
      console.log('budget:' + x.budget);
      this.limo = x.limo * 800;
      console.log('limo:' + this.limo);
      this.flowers = x.radioflowers/10 * 200;
      console.log('flowers: ' + this.flowers);
      if(x.budget === null)
      {
        x.budget = 0;
      }

    }
    // adds the expected costs
    this.expectedCost = (this.guests * form.value.hall)
     + +form.value.dj + +this.limo + this.flowers;

    //does the budget minus expected costs
    this.balance = this.budget - this.expectedCost;
    
    console.log(form.value);
    console.log('Expected costs:' + this.expectedCost);
    console.log('Balance: ' + this.balance)
    this.showBudget = true;
    //console.log(this.result);
  }
}