import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    private firebase: AngularFirestore,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      name: [this.player?.name],
    })
  }

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
    // this.checkTimer(this.player)
  }

  submit(status: boolean) {
    let player = {} as FutPlayer;
    const date = Date.now();
    player.isOnline = status;
    player.name = this.form.get('name').value;
    player.time = date;

    console.log(player);

    this.logEveryoneOut();

    this.firebase.collection('tracker').doc(player.name).update(player);
  }

  isDisabled() {
    let valid = false;

    if(this.form.get('name').value === this.player.name && this.player.isOnline) {
      console.log('yesss');
      
    }

    return valid
  }

  logEveryoneOut() {
    let player = {} as FutPlayer;
    player.isOnline = false;

    this.firebase.collection('tracker').doc('Marco').update(player);
    this.firebase.collection('tracker').doc('Vince').update(player);
    this.firebase.collection('tracker').doc('Robert').update(player);

  }

  checkTimer(player: FutPlayer) {
    var time = 7200;
    var interval = 1000;

    var startTimestamp = moment().startOf("day");
    setInterval(() => {
      startTimestamp.add(1, 'second');
      document.getElementById('timer').innerHTML =
        startTimestamp.format('HH:mm:ss');
    }, interval);
  }
};
