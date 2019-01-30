import { async } from '@angular/core/testing';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

interface Post{
  fullName: string;
  idea:string;
  date: number;

}

interface PostId extends Post{
  id: string;
}


@Component({
  selector: 'app-table-test',
  templateUrl: './table-test.component.html',
  styleUrls: ['./table-test.component.css']
})
export class TableTestComponent implements OnInit {

todayBefore: number = Date.now(); 
today = this.todayBefore.toString();
 
//////////////////////////////////////////


postCol: AngularFirestoreCollection<Post>;
posts: any

postCol2: AngularFirestoreCollection<Post>;


postDoc: AngularFirestoreDocument<Post>;
post: Observable<Post>;

title: string;
content: string;

constructor(private afs: AngularFirestore){

}

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
  // this.afs.collection('ideas').doc(this.today).set({'fullName': this.title, 'idea': this.content, 'date': this.today});
  }

  deletePost(postId){
    this.afs.doc('ideas/' + postId).delete();
  }
  deleteAll(){
    this.afs.doc('ideas/').delete();
  }

}

