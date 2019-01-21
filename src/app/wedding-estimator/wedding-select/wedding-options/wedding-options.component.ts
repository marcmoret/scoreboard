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
  @Input() isMusic:boolean;
  @Input() isHall:boolean;
  @Input() isSubmitted:boolean;
  @Output() hopefully = new EventEmitter();

  @Output() DJ =[
    {name: 'Marco Ferri', price: 5000},
    {name: 'DJ Mario', price: 4000},
    {name: 'Foo Fighters', price: 10000},
    {name: 'None', price: 0},
  ]

  @Output() Hall =[
    {name: 'Renaissance', price: 129},
    {name: 'Buffet Marina', price: 140},
    {name: 'Plaza Hotel', price: 160},
    {name: 'Punta Cana Don Pablo Resort', price: 2000},
    {name: 'Backyard', price: 50},
    {name: 'None', price: 0},
  ]

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
  verifyNull(form: NgForm){
     //verifies if there are any null values
     if(form.value.dj || form.value.hall === null ){
      //console.log('got some null values here');
      if(form.value.dj === null){
        this.form.value.dj = 0;
        console.log('null dj:' + this.form.value.dj);
      }else{
        this.form.value.hall = 0;
        console.log('null hall:' + this.form.value.hall);

      }
    }
  }
  
  onSubmit(form:NgForm){
    //sets null values to 0
    this.verifyNull(form);

//******starts fetching info from Array********

    for(let x of this.test)
    {
      this.guests = x.guests;
     // console.log('guests:' + x.guests);
      this.budget = x.budget;
      //console.log('budget:' + x.budget);
      this.limo = x.limo * 800;
      //console.log('limo:' + this.limo);
      this.flowers = x.radioflowers/10 * 200;
      //console.log('flowers: ' + this.flowers);
      if(x.budget === null)
      {
        x.budget = 0;
      }

    }
    // adds the expected costs
    this.expectedCost = (this.guests * this.form.value.hall)
     + +this.form.value.dj + +this.limo + this.flowers;


    //does the budget minus expected costs
    this.balance = this.budget - this.expectedCost;
    if(this.balance === null)
    {
      this.balance = 0;
    }
    
    console.log(this.form.value)
    console.log('null balance: ' + this.balance);
    console.log(form.value);
    console.log('Expected costs:' + this.expectedCost);
    console.log('Balance: ' + this.balance)
    this.showBudget = true;
    //console.log(this.result);
  }
}