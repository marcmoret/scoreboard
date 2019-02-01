import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.css']
})
export class TableTestComponent implements OnInit {

  AccessGranted = false;

  error=" ";
  count = 0;

ngOnInit(){
 
this.AccessGranted = false;

}

passwordCheck(pass){
  if(pass === "test"){
    this.AccessGranted = true;
  }else{
    this.count++;
    switch(this.count) { 
      case 1: { 
        this.error = "nope."
          break; 
      } 
      case 2: { 
        this.error = "try again."
          break; 
      } 
      case 3: {
        this.error = "wrong again."
          break;    
      } 
      case 4: { 
        this.error = "you should give up."
          break; 
      }
      case 5: { 
        this.error = "stop trying to hack me."
          break; 
      }    
      default: { 
        this.error = "Thats it, calling the cops."
          break;              
      } 
    }
  }
  
  
  
}


}

