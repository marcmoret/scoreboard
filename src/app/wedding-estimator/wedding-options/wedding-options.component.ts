import { Component, OnInit, ViewChild, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-wedding-options',
  templateUrl: './wedding-options.component.html',
  styleUrls: ['./wedding-options.component.css']
})
export class WeddingOptionsComponent implements OnInit {
@ViewChild('f') form: NgForm;
  constructor() { }

  @Input() isSubmitted:boolean;

  result: number = 0;
  flowers: number;

  ngOnInit() {
  
  }

  onReset(){
    this.isSubmitted = false;
    console.log(this.isSubmitted);
  }

  onSubmit(form:NgForm){

    if(form.value.optradio === 'true'){
     this.flowers = (form.value.guests/10 * 200)
     this.result = (form.value.guests * form.value.hall) + +form.value.dj + this.flowers;
    }else{
      this.result = (form.value.guests * form.value.hall) + +form.value.dj;
    }
    console.log(form.value);
    console.log(this.result);
    
  }
}