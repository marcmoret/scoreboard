import { Component, OnInit } from '@angular/core';
import { ServerService } from './ideas.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {


  constructor(private serverService: ServerService, private snackBar: MatSnackBar) {}



today: number = Date.now();
message = 'Successfully stole idea';
action = 'hahahahaha';


servers = [{
  name: '',
  idea: '',
  time: 0,
}];







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
this.openSnackBar();


}

  ngOnInit() {
   
    console.log(this.today);
    this.onGet();
    
  }

  openSnackBar() {
    this.snackBar.open(this.message, this.action, {
      duration: 2000,
    });

}
}