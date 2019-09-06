import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { GalleryModalComponent } from 'src/app/common/gallery-modal/gallery-modal.component';
import { PasswordComponent } from './collage-wall-password.component';

@Component({
  selector: 'app-collage-wall',
  templateUrl: './collage-wall.component.html',
  styleUrls: ['./collage-wall.component.css']
})
export class CollageWallComponent implements OnInit {

  constructor(private afs: AngularFirestore,  private dialog: MatDialog) { }

  public collagePosts;

  ngOnInit() {
    this.collagePosts = this.afs.collection('collageProfiles').valueChanges();    
  }

  onGallery(path){
    const dialogRef = this.dialog.open(
      GalleryModalComponent,{
        width: 'auto',
        height: 'auto',
        data: {url: path},
        panelClass: 'custom-modalbox'
      });
  
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  onEdit(event){
    const dialogRefs = this.dialog.open(
      PasswordComponent,{
        width: 'auto',
        height: 'auto',
        data: {name: event}
      });
  
    dialogRefs.afterClosed().subscribe(result => {
      //console.log(result);
    });
  }

}
