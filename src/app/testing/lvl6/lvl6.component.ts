import { Component, OnInit, HostListener, Directive } from '@angular/core';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-lvl6',
  templateUrl: './lvl6.component.html',
  styleUrls: ['./lvl6.component.css']
})
@Directive({selector: 'button[counting]'})
export class Lvl6Component implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  numberOfClicks = 0;
 
  @HostListener('mouseover') onHover() {
    window.alert("hover");
  }
 }

