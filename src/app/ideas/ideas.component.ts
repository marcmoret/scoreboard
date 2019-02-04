import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Component, OnInit, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';

interface Idea{
  idea:string;
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

  name: string;
  idea: string;

  today: number = Date.now();
  message = 'Successfully stole idea >:~D';
  action = 'hahahahaha';
  secondMessage = '...but seriously thanks for adding info'
  secondAction = '<3'
  dbToday = this.today.toString();
  testArray = []

  constructor(private snackBar: MatSnackBar,private afs: AngularFirestore) {}


  ngOnInit() {
    this.postCol = this.afs.collection('profiles');
   // this.posts = this.postCol.valueChanges();


  
    this.posts = this.postCol.snapshotChanges()
    .map(actions =>{
      return actions.map(a => {
        const data = a.payload.doc.data() as Idea;
        const id = a.payload.doc.id;
        return { id, data};
      })
    });
   
    //this.postCol = this.afs.collection('profiles', ref => ref.where('date' , '==', this.today));
    
    

    
  }

  addPost(){


    //capitlizes first name no matter how they enter it//
    this.name = this.name.toLowerCase();
    this.name = this.name.charAt(0).toUpperCase() + this.name.substr(1);
    //capitlizes first name no matter how they enter it//


    this.postCol2 = this.afs.collection('profiles').doc(this.name).collection('results');
   
     this.posts2 = this.postCol2.snapshotChanges()
     .map(actions =>{
       return actions.map(a => {
         const data = a.payload.doc.data();
         const id = a.payload.doc.id;
         return { id, data};
       })
     });

  //  // this.testArray.push(this.testArray + this.idea);
    this.afs.collection('profiles').doc(this.name).collection('results').add({'ideas':this.idea, 'date': this.today});
    this.afs.collection('profiles').doc(this.name).set({'date': this.today});

    this.openSnackBar();
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

onGet(e:any){

  console.log(e);
  this.name = e;
  this.postCol2 = this.afs.collection('profiles').doc(e).collection('results');

  this.posts2 = this.postCol2.snapshotChanges()
     .map(actions =>{
       return actions.map(a => {
         const data = a.payload.doc.data();
         const id = a.payload.doc.id;
         return { id, data};
       })
     });

    
     
  
}

}


/* old unused code

     //this.afs.collection('profiles').add({'fullName': this.name, 'idea': this.idea, 'date': this.today})

  Adds a collection   
  this.afs.collection(this.name).add({'fullName': this.name, 'idea': this.idea, 'date': this.today});


private serverService: ServerService,

servers = [{
  name: '',
  idea: '',
  time: 0,
}];


onSave(){
  this.serverService.storeServers(this.servers)
  .subscribe(
    (response)=> console.log(response),
    (error) => console.log(error)
  )
}

onGet(){
  this.serverService.getServers()
  .subscribe(
    (servers: any[] )=> this.servers = servers.reverse(),
    (error) => console.log(error),
  );
    this.servers.forEach(element => {
      console.log('array of time: ' + element.time);
    });
  console.log('service console: ' + this.servers);

}

onAddServer(name:string, idea: string){
  console.log(name, idea);
  this.servers.push({
  name: name,
  idea: idea,
  time: this.today
});
 
this.onSave();
this.onGet();
this.openSnackBar();
}

/// test method

onTest(){
  this.serverService.getTest()
  console.log(this.ideasArray);
  // console.log(this.serverService);
  // console.log(this.serverService.aliasI);
}

*/