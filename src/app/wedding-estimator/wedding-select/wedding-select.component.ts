import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-wedding-select',
  templateUrl: './wedding-select.component.html',
  styleUrls: ['./wedding-select.component.css']
})
export class WeddingSelectComponent implements OnInit {

  constructor() { }
  @Output() isSubmitted:boolean =false;
  
  onSubmit(){
    
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
