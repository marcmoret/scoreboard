import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Component, OnInit, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';

interface Post{
  fullName: string;
  idea:string;
  date: number;

}

interface PostId extends Post{
  id: string;
}

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
@Injectable()
export class IdeasComponent implements OnInit {
  
  postCol: AngularFirestoreCollection<Post>;
  posts: any;
  //dates = [this.posts.data.date];
  
  postCol2: AngularFirestoreCollection<Post>;
  
  
  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;
  
  title: string;
  content: string;

  constructor(private snackBar: MatSnackBar,private afs: AngularFirestore) {}

  today: number = Date.now();
  message = 'Successfully stole idea';
  action = 'hahahahaha';
  secondMessage = '...but seriously thanks for adding info'
  secondAction = '<3'


  ngOnInit() {
    this.postCol = this.afs.collection('ideas');
    // this.posts = this.postCol.valueChanges();
    

    this.posts = this.postCol.snapshotChanges()
    .map(actions =>{
      return actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, data};
      })
    })
    //this.postCol = this.afs.collection('ideas', ref => ref.where('date' , '==', this.today));

  

  }

  getPost(postId){
    this.postDoc = this.afs.doc('ideas/' + postId);
    this.post = this.postDoc.valueChanges();
  }

  addPost(){
   this.afs.collection('ideas').add({'fullName': this.title, 'idea': this.content, 'date': this.today});
   this.openSnackBar();
  // this.afs.collection('ideas').doc(this.today).set({'fullName': this.title, 'idea': this.content, 'date': this.today});
  }

  deletePost(postId){
    this.afs.doc('ideas/' + postId).delete();
  }
  deleteAll(){
    this.afs.doc('ideas/').delete();
  }


  openSnackBar() {
    this.snackBar.open(this.message, this.action, {
      duration: 4000, 
    });
}
}


/* old unused code

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