import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { CollageWallComponent } from './collage-wall.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-collage-wall-password',
  templateUrl: './collage-wall-password.html',
  styleUrls: ['./collage-wall-password.css']
})
export class PasswordComponent implements OnInit{

    public password:string;
    public currentCollage: any;
    public currentCollection: any;
    public error:boolean = false;

    constructor(public dialogRefs: MatDialogRef<PasswordComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, private afs:AngularFirestore){
            this.currentCollection = this.afs.collection('collageProfiles').doc(this.data.name).valueChanges();
            
        }

    ngOnInit(){
        this.currentCollection.subscribe(profile =>{
            this.currentCollage = profile;
        });
    }

    onSubmit(event){
                
        if(event === this.currentCollage.password){
            this.error = false;
            console.log('success');
            this.dialogRefs.close(event);
        }else{
            this.error = true;
        }
        

    }


}