
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  
  constructor() { }

  
  
  @Output() public names = [];
  public playerName: string;
  public numOfPlayers = 0;

  ngOnInit() {}

  public onReset() {
    this.names = [];
    this.numOfPlayers = 0;
  }

  public onAddName() {
    this.numOfPlayers++;
    if(this.playerName === ''){
      this.playerName = 'Player ' + this.numOfPlayers
    }
    this.names.push(this.playerName);
    // resets the input field to nothing
    this.playerName = '';
  }
}
