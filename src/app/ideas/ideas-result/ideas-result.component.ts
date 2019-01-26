import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ideas-result',
  templateUrl: './ideas-result.component.html',
  styleUrls: ['./ideas-result.component.css']
})
export class IdeasResultComponent implements OnInit {

  @Input() results = [];

  constructor() { }

  ngOnInit() {
    console.log(this.results);
  }

}
