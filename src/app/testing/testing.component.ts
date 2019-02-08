import { Component, OnInit } from '@angular/core';
import 'rxjs';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})


export class TestingComponent implements OnInit {

   votes = [
    { title: 'Dog', votes: 1 },
    { title: 'Donkey', votes: 2 },
    { title: 'Dave', votes: 3 },
    { title: 'Duck', votes: 2 },
    { title: 'Baboon', votes: 1 },
    { title: 'Bat', votes: 2 },
    { title: 'Blue', votes: 3 },
    { title: 'Banana', votes: 2 },
    { title: 'Cat', votes: 1 },
    { title: 'Camel', votes: 2 },
    { title: 'Chicken', votes: 3 },
    { title: 'Chimpmunk', votes: 2 },
    
    
  ];

  ngOnInit() {

    

  }
  onSort(){
    
      this.votes.sort(function(vote1, vote2){
     
      
      ///////////

      if (vote1.title > vote2.title) return 1;
      if (vote1.title < vote2.title) return -1;
      
      ////////

      if (vote1.votes < vote2.votes) return -1;
      if (vote1.votes > vote2.votes) return 1;

    });
  }
  
}
/*     

<div>Baboon</div>
  <div>Bat</div>
  <div>Blue Bird</div>

  <div>Cat</div>
  <div>Camel</div>
  <div>Chicken</div>  
  <div>Chipmunk</div>    

  <div>Dog</div>
  <div>Donkey</div>
  <div>Dave</div>  
  <div>Duck</div>

*/
