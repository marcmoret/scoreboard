import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-lvl4',
  templateUrl: './lvl4.component.html',
  styleUrls: ['./lvl4.component.css'],
  animations: [
    trigger('test', [
      transition('* => 1', [
        query('p',style({ transform: 'translateX(-100%)'})),
        query('p',
          [
            animate('500ms', style({ transform: 'translateX(0)'}))
        ])
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
