import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.css']
})
export class TableTestComponent implements OnInit {

  AccessGranted = false;

  error:string;

ngOnInit(){
 
this.AccessGranted = false;

}

passwordCheck(pass){
  if(pass === "test"){
    this.AccessGranted = true;
  }else{
   this.error = "nope."
   console.log(this.error);
  }
  
}


}

