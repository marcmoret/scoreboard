import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-wedding-options',
  templateUrl: './wedding-options.component.html',
  styleUrls: ['./wedding-options.component.css']
})
export class WeddingOptionsComponent implements OnInit {
@ViewChild('f') form: NgForm;
  constructor() { }

  result: number;
  flowers: number;

  ngOnInit() {
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