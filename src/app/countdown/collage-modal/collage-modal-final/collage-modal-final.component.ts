import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collage-modal-final',
  templateUrl: './collage-modal-final.component.html',
  styleUrls: ['./collage-modal-final.component.css']
})
export class CollageModalFinalComponent implements OnInit {

  @Input()
  public img;
  public message;
  public name;

  constructor() { }

  ngOnInit() {
  }

}
