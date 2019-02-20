import { Component, OnInit, Output } from '@angular/core';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-lvl4',
  templateUrl: './lvl4.component.html',
  styleUrls: ['./lvl4.component.css'],
  animations: [
    trigger('test', [
      transition('* => 1', [
        query('p',style({ transform: 'translateX(0%)'})),
        query('p',
          stagger('600ms', [
            animate('900ms', style({ transform: 'translateX(50%)'}))
        ]))
      ])
    ])
  ]
})
export class Lvl4Component implements OnInit {
  @Output() visible: boolean = false;

  constructor() {}

  ngOnInit() {
  }

  toggle(){
    this.visible = !this.visible;
  }
 
}
