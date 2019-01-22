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
  @Input() isBand:boolean;
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

  @Output() Band = [
    {name: 'The Foo Fighters', price: 100000},
    {name: 'The Beatles' , price: 150000},
    {name: 'The Showmen', price: 10000},
    {name: "Davide's Band", price: 1000}
  ]

  expectedCost: number = 0;
  flowers: number;
  guests;
  balance:number = 0;
  budget = 0;
  limo = 0;
  showBudget:boolean = false;
 
  

  ngOnInit() {    
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
  verifyNull(form){
     //verifies if there are any null values
     if(form.value.dj == 'undefined' || form.value.hall == null ){

      if(form.value.dj === null){
        form.value.dj = 0;
      //  console.log('null dj:' + this.form.value.dj);
      }else{
        form.value.hall = 0;
        //console.log('null hall:' + this.form.value.hall);
      }
    }
  }
  
  onSubmit(form:NgForm){
    //sets null values to 0
     this.verifyNull(this.form);

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

  // fixes the dj undefined.
    if(form.value.dj ){
      console.log('different error');
    }else{
      console.log('caught error');
      this.form.value.dj = 0;
    }

    console.log('before the null' + this.form.value.hall);
    console.log( 'before the nullll ' + this.form.value.dj);
    console.log(this.isBand);
    console.log();
    console.log();
    this.expectedCost = (this.guests * this.form.value.hall)
     + +this.form.value.dj + +this.limo + this.flowers;


    //does the budget minus expected costs
    this.balance = this.budget - this.expectedCost;
    if(this.balance === null)
    {
      this.balance = 0;
    }
    
    console.log(this.form.value)
    console.log(form.value);
    console.log('Expected costs:' + this.expectedCost);
    console.log('Balance: ' + this.balance)
    this.showBudget = true;
  }
}