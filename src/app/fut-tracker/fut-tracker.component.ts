import { FutPlayer } from './../models/futPlayer';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fut-tracker',
  templateUrl: './fut-tracker.component.html',
  styleUrls: ['./fut-tracker.component.css']
})
export class FutTrackerComponent implements OnInit {

  currentlyLoggedIn = '';
  player: FutPlayer;
  players: FutPlayer[] = [];


  constructor(
    private firebase: AngularFirestore
  ) { }

  ngOnInit(): void {
    let test = this.firebase.collection<FutPlayer>('tracker');
    test.valueChanges().subscribe((users) => {
      this.players = users;
      this.whoOnline();
    });
  }

  whoOnline() {
    console.log('fired');
    
    this.player = this.players.find((player) => {
      console.log('player', player.isOnline);

      return player.isOnline === true;
    });
    console.log(this.player);
  }
}
