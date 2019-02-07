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
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})


export class DatabaseComponent implements OnInit {

  todayBefore: number = Date.now(); 
  today = this.todayBefore.toString();
    
  //////////////////////////////////////////
  
  
  postCol: AngularFirestoreCollection<Post>;
  posts: any
  
  postCol2: AngularFirestoreCollection<Post>;
  postCol3: AngularFirestoreCollection<Post>;
  
  
  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;
  
  title: string;
  content: string;
  posts3: any;
  testArray3: any;
  testArray4: any[];
  
  constructor(private afs: AngularFirestore, private test: AngularFirestore){
  
  }
    
    ngOnInit() {
        this.postCol = this.afs.collection('profiles');
        // this.posts = this.postCol.valueChanges();
        
    
        this.posts = this.postCol.snapshotChanges()
        .map(actions =>{
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data};
          })
        });
    
        
    
      }
    
    getPost(postId){
        this.postDoc = this.afs.doc('ideas/' + postId);
        this.post = this.postDoc.valueChanges();
      }
    
     
    
    deletePost(postId){
     
     this.postCol3=  this.test.collection('profiles').doc(postId).collection('results', ref => ref.where('name', '==',postId));
      
     this.posts3 = this.postCol3.snapshotChanges()
     .map(actions =>{
       return actions.map(a => {
         const data = a.payload.doc.data();
         const id = a.payload.doc.id;
         return { id, data};
       })
     });
      this.posts3.subscribe((res:[])=>{
      this.testArray3 = res;
      this.testArray4 = [];
      for(let x of this.testArray3){
       
        this.afs.collection('profiles').doc(postId).collection('results').doc(x.id).delete();
        
      }
    });  

     this.afs.doc('profiles/' + postId).delete();
      }
    deleteIdeas(postId){
      this.postCol3=  this.test.collection('profiles').doc(postId).collection('results', ref => ref.where('name', '==',postId));
      
     this.posts3 = this.postCol3.snapshotChanges()
     .map(actions =>{
       return actions.map(a => {
         const data = a.payload.doc.data();
         const id = a.payload.doc.id;
         return { id, data};
       })
     });
      this.posts3.subscribe((res:[])=>{
      this.testArray3 = res;
      this.testArray4 = [];
      for(let x of this.testArray3){
       
        this.afs.collection('profiles').doc(postId).collection('results').doc(x.id).delete();
        
      }
    }); 
      }
    
}
