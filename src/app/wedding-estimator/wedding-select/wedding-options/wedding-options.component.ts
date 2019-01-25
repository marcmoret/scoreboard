import { Component, OnInit, ViewChild, Input, Injectable, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { toArray } from 'rxjs/operators';

@Component({
  selector: 'app-wedding-options',
  templateUrl: '././wedding-options.component.html',
  styleUrls: ['././wedding-options.component.css']
})
@Injectable()
export class WeddingOptionsComponent implements OnInit {
  
@ViewChild('f') form: NgForm;
@ViewChild('g') edit: NgForm;
  constructor() {}

  @Input() personInfo = [];
  @Input() isMusic:boolean;
  @Input() isHall:boolean;
  @Input() isBand:boolean;
  @Input() isSubmitted:boolean;
  @Output() hopefully = new EventEmitter();
  isSet:boolean;

  @Output() DJ =[
    {name: 'Marco Ferri', price: 5000},
    {name: 'DJ Mario', price: 4000},
    {name: 'Foo Fighters', price: 10000},
  ]

  @Output() Hall =[
    {name: 'Renaissance', price: 129},
    {name: 'Buffet Marina', price: 140},
    {name: 'Plaza Hotel', price: 160},
    {name: 'Punta Cana Don Pablo Resort', price: 2000},
    {name: 'Backyard', price: 50},
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
  testArray = [];
  obj;
 
  

  ngOnInit() {
    this.isSet = true;    
  }

  onReset(){
    this.hopefully.emit(this.isSubmitted = false);
    console.log(this.isSubmitted);
    this.form.reset();
    this.personInfo = [];
    this.bringToZero();
    this.isSet = true;
   
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
     // fixes the dj/band/hall undefined.
     if(!form.value.dj ){
     console.log('caught null dj');
      this.form.value.dj = 0;
    }

    if(!form.value.band ){
      console.log('caught null band');
      this.form.value.band = 0;
    }

    if(!form.value.hall ){
      console.log('caught null hall');
      this.form.value.hall = 0;
    }
  }
  
  onEdit(){
    this.isSet = false;
    console.log('fired');
  }  
  onSubmit(form:NgForm){
    //sets null and undefined values to 0
     this.verifyNull(this.form);

  //******starts fetching info from Array********

    for(let x of this.personInfo)
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
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();

    // calculates the cost
    this.expectedCost = (this.guests * this.form.value.hall)
     + +this.form.value.dj + +this.limo + this.flowers + +this.form.value.band;


    //does the budget minus expected costs
    this.balance = this.budget - this.expectedCost;
    if(this.balance === null)
    {
      this.balance = 0;
    }
    if(this.budget === null)
    {
      this.budget = 0;
    }
    
    console.log(this.form.value)
    console.log(form.value);
    console.log('Expected costs:' + this.expectedCost);
    console.log('Balance: ' + this.balance)
    console.log(this.budget);
    this.showBudget = true;
  }


  onEditSubmit(edit: NgForm){
  
  
  console.log(this.edit.form.value);
  console.log(this.obj);

  
  for(let x in this.edit.form.value){
    this.testArray.push(x);
  }
  console.log(this.testArray);
  
  //resets the page to normal
  this.isSet = true;
  }




  getIndex(i:any){
    console.log(i);
  }
}