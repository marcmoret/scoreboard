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


dates = [];

servers = [{
  name: '',
  idea: '',
  time: 0,
}];


onAddServer(name:string, idea: string){
  console.log(name, idea);
this.servers.push({
  name: name,
  idea: idea,
  time: this.today
});
 
this.onSave();
this.onGet();

}

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
    (servers: any[] )=> this.servers = servers,
    (error) => console.log(error),
  );
    
  console.log('service console: ' + this.servers);
}


  ngOnInit() {
   
    console.log(this.today);
    this.onGet();
  }

 

}