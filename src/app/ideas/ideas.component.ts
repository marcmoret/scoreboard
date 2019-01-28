import { Component, OnInit } from '@angular/core';
import { ServerService } from './ideas.service';


@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {


  constructor(private serverService: ServerService) {}



today: number = Date.now();


dates = [
  {
    date: 0,
  }
];

servers = [{
  name: '',
  idea: '',
  time: 0,
}];



onAddDates(date:number){
  this.dates.push({
    date : date
  });
   
  this.onSaveDate();
  this.onGet();
  
  }

onSaveDate(){
  this.serverService.storeDates(this.dates)
  .subscribe(
    (response)=> console.log(response),
    (error) => console.log(error)
  )
}

onGetDate(){
  this.serverService.getDates()
  .subscribe(
    (dates: any[] )=> this.dates = dates.reverse(),
    (error) => console.log(error),
  );
  console.log('service console: ' + this.dates);
}

////////////////////////////////////////////////////////////////////////////////////////////////





onSave(){
  this.serverService.storeServers(this.servers)
  .subscribe(
    (response)=> console.log(response),
    (error) => console.log(error)
  )
}

onGet(){
  this.serverService.getServers()
  .subscribe(
    (servers: any[] )=> this.servers = servers.reverse(),
    (error) => console.log(error),
  );
    this.servers.forEach(element => {
      console.log('array of time: ' + element.time);
    });
  console.log('service console: ' + this.servers);
  this.onGetDate();
}


onAddServer(name:string, idea: string){
  console.log(name, idea);
  this.servers.push({
  name: name,
  idea: idea,
  time: this.today
});
 
this.onSave();
this.onGet();

this.onAddDates(this.today);

}

  ngOnInit() {
   
    console.log(this.today);
    this.onGet();
  }

 

}