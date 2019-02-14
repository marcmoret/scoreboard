import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-lvl4',
  animations: [
    trigger('openClose', [
      
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './lvl4.component.html',
  styleUrls: ['./lvl4.component.css']
})
export class Lvl4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isOpen = true;
 
  toggle() {
    this.isOpen = !this.isOpen;
  }

}
