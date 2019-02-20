import { ServiceTestService } from './../testing/service-test.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  message:string;

  constructor(private service: ServiceTestService) { }

  ngOnInit() {
  //  this.service.currentService.subscribe(message => this.message = message);
  }
  

}
