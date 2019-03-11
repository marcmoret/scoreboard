import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-sub-idea',
  templateUrl: './sub-idea.component.html',
  styleUrls: ['./sub-idea.component.css']
})
export class SubIdeaComponent implements OnInit {

  @Input() currentId ='';
  postCol3: any;
  posts3:any;
  postDoc3: AngularFirestoreDocument<any>;
  testArray4: any;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {

    this.postCol3 = this.afs.collection('profiles').doc(this.currentId).collection('results'); //, ref => ref.where('name', '==',z)
    
     this.posts3 = this.postCol3.valueChanges()
      
    //  this.posts3.subscribe((res:[])=>{
    //    debugger;
    //     this.testArray4.push(res);
    //     console.log(this.testArray4);
    //   });
  }
}
