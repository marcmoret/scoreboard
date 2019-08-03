import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { NewArguementComponent } from './new-arguement/new-arguement.component';

@Component({
  selector: 'app-i-told-ya',
  templateUrl: './told-ya.component.html',
  styleUrls: ['./told-ya.component.css']
})
export class ToldYaComponent implements OnInit {

  public onBegin: boolean = false;
  public test2;
  constructor(
  ) {}

  ngOnInit() {
  }

  onStart(){
    this.onBegin = true;
  }

  test(){
  }

}
