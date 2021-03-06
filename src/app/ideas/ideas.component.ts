import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Component, OnInit, Injectable, AfterViewInit, Output, AfterContentChecked, Directive, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

interface Idea{
  idea:string;
  name: string;
}

interface profileName extends Idea{
  id: string;
}

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
@Injectable()
export class IdeasComponent implements OnInit {
  
  //declare variables
  postCol: AngularFirestoreCollection<Idea>;
  posts: any;
  postDoc: AngularFirestoreDocument<Idea>;
  post: Observable<Idea>;
  postCol2: AngularFirestoreCollection<Idea>;
  posts2:any;
  postDoc2: AngularFirestoreDocument;
  postCol3: AngularFirestoreCollection<Idea>;
  posts3:any;
  postDoc3: AngularFirestoreDocument<any>;
  name='';
  idea: string;
  @Output()showDirection = false;
  today: number = Date.now();
  message = 'Successfully stole idea >:~D';
  action = 'hahahahaha';
  secondMessage = '...but seriously thanks for adding info'
  secondAction = '<3'
  dbToday = this.today.toString();
  testArray: any[] = new Array;
  testArray3:  any[] = new Array;
 
  test;
  count=0;
  counter=0;
  counterer=0;

  constructor(private snackBar: MatSnackBar,private afs: AngularFirestore,) {  }



  resetValues(){
    this.testArray = [];
    this.testArray3 = [];
  }


  ngOnInit() {
    this.postCol = this.afs.collection('profiles');
    this.posts = this.postCol.snapshotChanges()
    .map(actions =>{
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, data};
      })});

    this.posts.subscribe((res)=>{
      this.testArray = res;
      this.processNames(this.testArray);
    });
     this.resetValues();
  }

  processNames(mhm:any){

    this.testArray3 = mhm;
    console.log(mhm);

  }
  addPost(){


    //capitlizes first name no matter how they enter it, removes whitespace//
    this.name = this.name.toLowerCase().trim();
    this.name = this.name.charAt(0).toUpperCase() + this.name.substr(1);
    //capitlizes first name no matter how they enter it//


    this.afs.collection('profiles').doc(this.name).collection('results').add({'ideas':this.idea, 'date': this.today, 'name': this.name});
    this.afs.collection('profiles').doc(this.name).set({'date': this.today});

    if(this.counter === 0){
      this.openSnackBar();
      this.counter++;
    }
   // this.resetValues();
    this.idea = '';
  }

  openSnackBar() {
    const wait = (ms) => new Promise(res => setTimeout(res, ms));
    this.snackBar.open(this.message, this.action, {
      duration: 5000,
    });
    const startAsync = async callback => {
      await wait(4000);
      callback(this.snackBar.open(this.secondMessage, this.secondAction, {
        duration: 7000,
      }));
    };
    startAsync(text => console.log());
}

}