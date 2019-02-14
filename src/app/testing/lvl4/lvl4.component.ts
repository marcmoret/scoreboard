import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CdkAccordionItem } from '@angular/cdk/accordion';
import { matExpansionAnimations,MatExpansionPanelState } from '@angular/material';

@Component({
  selector: 'app-lvl4',
  animations: [ 
    matExpansionAnimations.bodyExpansion,
    trigger('openClose', [
      
      state('open', style({
        height: '225px',
      })),
      state('closed', style({
        height: '0px',
        overflowY:'hidden'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s ease-out')
      ]),
    ]),
  ],
  templateUrl: './lvl4.component.html',
  styleUrls: ['./lvl4.component.css']
})
export class Lvl4Component extends CdkAccordionItem implements OnInit {

  getExpandedState(): MatExpansionPanelState {
    return this.expanded ? 'expanded' : 'collapsed';
  }

  ngOnInit() {
  }

  isOpen = true;
 
  toggle1() {
    this.isOpen = !this.isOpen;
  }

  toggleAccordion() : void {
    this.toggle();
  }

}
