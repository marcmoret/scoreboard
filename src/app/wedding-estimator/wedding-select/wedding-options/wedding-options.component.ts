import { WeddingSelectComponent } from './../wedding-select.component';
import { Component, OnInit, ViewChild, Input, Injectable } from '@angular/core';
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

  result: number = 0;
  flowers: number;
  guests;

  

  ngOnInit() {

    console.log('form' + this.guests);
    console.log(this.test);
  }

  onReset(){
    this.isSubmitted = false;
    console.log(this.isSubmitted);
   
  }
  
  

  onSubmit(form:NgForm){
    for(let x of this.test)
    {
      this.guests = x.guests;
      console.log('test' + x.guests);
    }
    if(form.value.optradio === 'true'){
     this.flowers = (this.guests/10 * 200)
     this.result = (this.guests * form.value.hall) + +form.value.dj + this.flowers;
    }else{
      this.result = (this.guests * form.value.hall) + +form.value.dj;
    }
    console.log(form.value);
    //console.log(this.result);
    console.log(this.guests);
  }
}