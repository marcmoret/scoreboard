import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { GalleryModalComponent } from 'src/app/common/gallery-modal/gallery-modal.component';

@Component({
  selector: 'app-collage-wall',
  templateUrl: './collage-wall.component.html',
  styleUrls: ['./collage-wall.component.css']
})
export class CollageWallComponent implements OnInit {

  constructor(private afs: AngularFirestore,  private dialog: MatDialog) { }

  public collagePosts;
  
  list:[];

  ngOnInit() {
    this.collagePosts = this.afs.collection('collageProfiles').valueChanges();
    // this.collagePosts.subscribe(res =>{
    //   this.list = res.map(item =>{
    //     return item.payload.doc.data();
    //   })
    // });
    //console.log(this.list);
    
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

}
