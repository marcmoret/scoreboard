import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  constructor() { }
  t;

  ngOnInit() {
    var text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
    var obj = JSON.parse(text);
    
   
    
    console.log(obj);
  }
}
