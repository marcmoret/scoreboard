import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';


@Component({
  selector: 'app-lvl2',
  templateUrl: './lvl2.component.html',
  styleUrls: ['./lvl2.component.css'],
  animations: [
    trigger('navigation', [
        state('true' , style({ left:'-20%'})), 
        state('false', style({ left:'0%'})),
        transition('0 => 1', animate('.2s')),
        transition('1 => 0', animate('.3s'))

    ]),
    trigger('showOverlay', [
        state('true' , style({ opacity: 1,display:"block" })), 
        state('false', style({ opacity: 0,display:"none" })),
        transition('0 => 1', animate('.2s')),
        transition('1 => 0', animate('.5s'))
    ])
  ]
})
export class Lvl2Component implements OnInit {

  events: string[] = [];
  opened: boolean;

  navigation:boolean = true;
  showOverlay:boolean = false;
  navigationDrawer(){
      this.navigation = !this.navigation;
      this.showOverlay = !this.showOverlay;
  }

  
  constructor() { }

  ngOnInit() {
  }

}
