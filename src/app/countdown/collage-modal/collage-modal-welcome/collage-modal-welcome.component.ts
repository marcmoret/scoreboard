import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-collage-modal-welcome',
  templateUrl: './collage-modal-welcome.component.html',
  styleUrls: ['./collage-modal-welcome.component.css']
})
export class CollageModalWelcomeComponent implements OnInit {

  @Output() 
  begin: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onBegin(){
    this.begin.emit();
  }

}
