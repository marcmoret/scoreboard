import { FormGroup } from '@angular/forms';
import { FutPlayer } from './../models/futPlayer';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-fut-tracker',
  templateUrl: './fut-tracker.component.html',
  styleUrls: ['./fut-tracker.component.css']
})
export class FutTrackerComponent implements OnInit {

  currentlyLoggedIn = '';
  player: FutPlayer;
  players: FutPlayer[] = [];
  form: FormGroup;
  stopWatch;


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
    this.checkTimer(this.player)
  }

  submit() {

  }

  checkTimer(player:FutPlayer) {
    var time = 7200;
var duration = moment.duration(time * 1000, 'milliseconds');
var interval = 1000;

setInterval(() => {
  duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
  //show how many hours, minutes and seconds are left
  //this.stopWatch = moment('.countdown').text(moment(duration.asMilliseconds()).format('h:mm:ss'));
}, interval);
  }
}
