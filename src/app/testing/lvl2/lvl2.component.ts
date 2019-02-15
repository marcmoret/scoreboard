import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';


@Component({
  selector: 'app-lvl2',
  templateUrl: './lvl2.component.html',
  styleUrls: ['./lvl2.component.css'],
  animations: [
    trigger('logo', [
      transition('0 => 1', [
        style({transform: 'translateX(100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition('1 => 0', [
        (animate('.9s 10000ms ease-in', style({transform: 'translateX(100%)'})))
      ])
    ]),
    trigger('navigation', [
        state('true' , style({ left:'-15%', })), 
        state('false', style({ left:'0%'})),
        transition('0 => 1', animate('.2s')),
        transition('1 => 0', animate('.3s'))

    ]),
    // sub-menu settings animation       
    //state('open', style({transform: 'translateY(0%)'})),
      //state('closed', style({transform: 'translateY(-100%)', display:'none'})),

    trigger('openClose', [
      state('open', style({height: '150px'})),
      state('closed', style({height: '0px', overflow:'hidden'})),
      transition('open => closed',animate('.5s ease-out' )),
      transition('closed => open', animate('.5s ease-in')),
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
    console.log(this.isOpen);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
