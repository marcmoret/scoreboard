import { Component, OnInit, Output } from '@angular/core';
import { ServerService } from './ideas.service';


@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {
  private generateId(){
    return Math.round(Math.random() * 10000);
  }

  servers = [];

onAddServer(name:string, idea: string){
this.servers.push({
  name: name,
  idea: idea,
  id: this.generateId()
});

}

onSave(){
  this.serverService.storeServers(this.servers)
  .subscribe(
    (response)=>{
    console.log(response);
    (error) => console.log(error);
  }
  )
}


onGet(){
  this.serverService.getServers().subscribe(
    (servers: any[] )=> this.servers = servers,
    (error) => console.log(error),
  );
  console.log('service console: ' + this.servers);
}


  constructor(private serverService: ServerService) {}
   

  
  
  ngOnInit() {
  }

  

}