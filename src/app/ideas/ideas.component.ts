import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Component, OnInit, Injectable, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
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

  today: number = Date.now();
  message = 'Successfully stole idea >:~D';
  action = 'hahahahaha';
  secondMessage = '...but seriously thanks for adding info'
  secondAction = '<3'
  dbToday = this.today.toString();
  testArray: any[] = new Array;
  testArray3:  any[] = new Array;
  testArray4: any[] = new Array;
  testArray5: any[] = new Array;
  count=0;
  counter=0;
  counterer=0;

  constructor(private snackBar: MatSnackBar,private afs: AngularFirestore,) {}
  
  resetValues(){
    this.testArray = [];
    this.testArray3 = [];
    this.testArray4 = [];
    
  }
  

  ngOnInit() {

    this.postCol = this.afs.collection('profiles');
    this.posts = this.postCol.snapshotChanges()
    .map(actions =>{
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, data};
      })
    });
  // debugger;
  this.testArray4 = [];
    this.posts.subscribe((res)=>{
      this.testArray = res;
      for(let x of this.testArray){
    // this.postCol3 = this.afs.collection('profiles').doc(x.id).collection('results', ref => ref.where('name', '==',x.id));
    this.postCol3 = this.afs.collection('profiles').doc(x.id).collection('results');

    this.posts3 = this.postCol3.valueChanges();
    this.posts3.subscribe((res:any)=>{
     this.testArray3 = res;
    
      for(let x of this.testArray3){

        console.log('testarray3' + x);
        this.testArray4.push(x);
      }
      
      //debugger;
      console.log('double time' + this.count);
      console.log(this.testArray5);
      this.count++;
     });  
      }
      this.resetValues();
    });
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

// onGet(e){
  
//   console.log(e);
//  //  console.log(this.testArray3);
//  // console.log('this is the array');
//  // console.log(this.testArray4);
//   this.postCol3 = this.afs.collection('profiles').doc(e).collection('results', ref => ref.where('name', '==',e));

//     this.posts3 = this.postCol3.valueChanges();
      
//     this.posts3.subscribe((res:[])=>{
//       this.testArray3 = res;
//       for(let x of this.testArray3){
//         this.testArray4.push(x);
//       }
//       //debugger;
//       this.testArray4 = this.testArray4.slice(0);
//       console.log('double time' + this.count);
//       console.log(this.testArray4);
//       this.count++;
//      });  

//      this.resetValues();

//   }

}