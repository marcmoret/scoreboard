import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';


@Component({
  selector: 'app-lvl2',
  templateUrl: './lvl2.component.html',
  styleUrls: ['./lvl2.component.css'],
  animations: [
    trigger('navigation', [
        state('true' , style({ left:'-15%'})), 
        state('false', style({ left:'0%'})),
        transition('0 => 1', animate('.2s')),
        transition('1 => 0', animate('.3s'))

    ]),
    trigger('openClose', [
      
      state('open', style({
        
        opacity: 1,
        backgroundColor: '#f9f9ee'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        display:'none',
        backgroundColor: '#f9f9ee'
      })),
      transition('open => closed', [
        animate('.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class Lvl2Component implements OnInit {

  slideInOut:boolean = false;

  navigation:boolean = true;
  showOverlay:boolean = false;
  state:boolean =true;
  
  
  navigationDrawer(){

    const wait = (ms) => new Promise(res => setTimeout(res, ms));
        const startAsync = async callback => {
          await wait(100);
          this.navigation = !this.navigation;
        };
        startAsync(text => console.log());
  }
  navigationDrawer2(){
    this.navigation = !this.navigation;
  }

  isOpen = false;
 
  toggle() {
    this.isOpen = !this.isOpen;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
