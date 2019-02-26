import { Component, OnInit, Output } from '@angular/core';
import { trigger, transition, style, animate, stagger, query, keyframes } from '@angular/animations';
import * as kf from 'src/app/testing/lvl4/keyframes';

@Component({
  selector: 'app-lvl4',
  templateUrl: './lvl4.component.html',
  styleUrls: ['./lvl4.component.css'],
  animations: [
    trigger('test', [
      transition('* => 1', animate('1s', keyframes(kf.string))),
      transition('* => 0', animate('1s', keyframes(kf.string)))
    ])
  ]
})
export class Lvl4Component implements OnInit {
  @Output() visible: boolean = false;
  count: number;
  test: boolean = false;

  constructor() {}

  ngOnInit() {
  }

  toggle(){
    this.visible = !this.visible;
  }
  testChange(){
    console.log('test')
    this.count++;
    this.test = !this.test;
  }
 
}
