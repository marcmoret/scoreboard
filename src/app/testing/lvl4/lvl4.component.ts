import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, stagger } from '@angular/animations';

@Component({
  selector: 'app-lvl4',
  templateUrl: './lvl4.component.html',
  styleUrls: ['./lvl4.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        (animate('.9s 1000ms ease-in', style({transform: 'translateY(-100%)'})))
      ])
    ])
  ]
})
export class Lvl4Component implements OnInit {
  visible: boolean = false;

  ngOnInit() {
  }
  toggle(){
    this.visible = !this.visible;
  }

}
