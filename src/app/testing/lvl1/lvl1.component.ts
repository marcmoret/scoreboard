import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lvl1',
  templateUrl: './lvl1.component.html',
  styleUrls: ['./lvl1.component.css']
})
export class Lvl1Component implements OnInit {

  @Input() level1On;

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

  constructor() { }

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
