import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-arguement',
  templateUrl: './new-arguement.component.html',
  styleUrls: ['./new-arguement.component.css']
})
export class NewArguementComponent implements OnInit {
 
  public model = {
    editorData: '<p>Hello, world!</p>'
  };
  
  constructor() { }

  ngOnInit() {
  }

}
