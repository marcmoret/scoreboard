import { Component, OnInit, Output } from '@angular/core';
import 'rxjs';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})


export class TestingComponent implements OnInit {
   level1On = false;
   level2On = false;
   level3On = false;
   level4On = false;
   level5On = false;
   level6On = false;

   

  ngOnInit() {
  }

resetValues(){
  this.level1On = false;
   this.level2On = false;
   this.level3On = false;
   this.level4On = false;
   this.level5On = false;
   this.level6On = false;
}

  onLevel1(){
    this.resetValues();
    this.level1On = true;
  }

  onLevel2(){
    this.resetValues();
    this.level2On = true;

  }

  onLevel3(){
    this.resetValues();
    this.level3On = true;
  }

  onLevel4(){
    this.resetValues();
    this.level4On = true;
  }

  onLevel5(){
  }

  
}
/*     



*/
