import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collage-wall',
  templateUrl: './collage-wall.component.html',
  styleUrls: ['./collage-wall.component.css']
})
export class CollageWallComponent implements OnInit {

  public obj = [1,2,3,4,5,6,6,7,8]

  constructor() { }

  ngOnInit() {
  }

}
