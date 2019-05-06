import { CollageModalComponent } from 'src/app/countdown/collage-modal/collage-modal.component';
import { User } from './../user';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { CollageWallComponent } from './collage-wall.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { GalleryModalComponent } from 'src/app/common/gallery-modal/gallery-modal.component';

@Component({
  selector: 'app-collage-wall-password',
  templateUrl: './collage-wall-password.html',
  styleUrls: ['./collage-wall-password.css']
})
export class PasswordComponent implements OnInit{

    public password:string;
    public currentCollage: User;
    public currentCollection: any;
    public error:boolean = false;

    constructor(public dialogRefs: MatDialogRef<PasswordComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, private afs:AngularFirestore, private dialog: MatDialog){
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
            this.onPassword(this.currentCollage);
            this.dialogRefs.close(event);
        }else{
            this.error = true;
        }
    }

    onPassword(currentCollage){
        const dialogRef = this.dialog.open(
          CollageModalComponent,{
            width: 'auto',
            height: 'auto',
            data: currentCollage,
          });
      
        dialogRef.afterClosed().subscribe(result => {
        });
      }




}