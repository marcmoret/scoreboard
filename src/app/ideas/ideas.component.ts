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

  @Output() servers = [{
    name: 'Testserver',
    capacity: 10,
    id:this.generateId()
  },
  {
    name: 'Liveserver',
    capacity: 100,
    id:this.generateId()
  }
];

onAddServer(name:string){
this.servers.push({
  name: name,
  capacity: 50,
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


  constructor(private serverService: ServerService) { }
  
  ngOnInit() {
  }

}
