import { Component, OnInit, Output } from '@angular/core';
import { ServerService } from './ideas.service';


@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {

  constructor(private serverService: ServerService) {}

  private generateId(){
    return Math.round(Math.random() * 10000);
  }
  today: number = Date.now();



servers = [];


onAddServer(name:string, idea: string){
this.servers.push({
  name: name,
  idea: idea,
  time: this.today
});

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
    
  }
}