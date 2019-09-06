import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Output, Input } from '@angular/core';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { finalize } from 'rxjs/operators';
import { User } from '../../user';
import { AngularFirestore } from '@angular/fire/firestore';
import { GalleryModalComponent } from 'src/app/common/gallery-modal/gallery-modal.component';
import { CollageModalComponent } from '../collage-modal.component';

@Component({
  selector: 'app-collage-modal-general',
  templateUrl: './collage-modal-general.component.html',
  styleUrls: ['./collage-modal-general.component.css']
})
export class CollageModalGeneralComponent implements OnInit {

  ref:AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress:Observable<number>;
  downloadURL: Observable<string>;
  uploading = false;
  public user: User = new User;
  @Input() public current:User;
  
  public today: number = Date.now();

  public downloadSrc: string;
  public collageProfilePath: any;
  collection: AngularFirestoreCollection;
  tempData: any;
  public names = [];
  public namesList: any[];
  imagePath: any;
  imgURL: any;
  previewLoaded = false;
  

  toolMessage="This will allow you to make edits to your post later on. (Don't put real passwords, I can see them!)";

  constructor(private afs: AngularFirestore, private afsStorage:AngularFireStorage,
    public dialogRef: MatDialogRef<CollageModalComponent>,
    private dialog: MatDialog){
    this.user.date = this.today;
  }

  ngOnInit() {        
    if (this.current){
      this.user.name = this.current.name;
      this.user.text = this.current.text;
      this.user.password = this.current.password;
      this.imgURL = this.current.path;
      this.previewLoaded = true;
    }
  }

  upload(file){
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afsStorage.ref(id);

    //capitlizes first name no matter how they enter it, removes whitespace//
    this.user.name = this.user.name.toLowerCase().trim();
    this.user.name = this.user.name.charAt(0).toUpperCase() + this.user.name.substr(1);
    //capitlizes first name no matter how they enter it//

    this.uploading = true;
    
    if(this.imagePath){
      this.task = this.ref.put(this.imagePath.target.files[0])
      this.uploadProgress = this.task.percentageChanges();
      this.task.snapshotChanges().pipe(
        finalize(()=> {
          this.ref.getDownloadURL().subscribe(url => {
            this.downloadSrc = url;
            this.afs.collection('collageProfiles2020').doc(this.user.name).set(
              {'path':this.downloadSrc, 'date': this.today,'name':this.user.name, 'text': this.user.text, 'password':this.user.password});
            this.allDone(); // takes the img filePath and stores it as a string
            this.dialogRef.close(); // closes window
          });
        })
      ).subscribe(); //end
    }else{
      this.afs.collection('collageProfiles').doc(this.user.name).set(
        {'path':this.imgURL, 'date': this.today,'name':this.user.name, 'text': this.user.text, 'password':this.user.password});
      this.allDone(); // takes the img filePath and stores it as a string
      this.dialogRef.close(); //closes window
    }
  }

  allDone(){
    this.collageProfilePath = this.afs.collection('collageProfiles').doc(this.user.name);

    this.collection = this.afs.collection('collageProfiles');
    this.tempData = this.collection.snapshotChanges()
    .map(actions =>{
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, data};
      })});

    this.tempData.subscribe((res)=>{
      this.names = res;
      this.processNames(this.names);
    });
  }
  processNames(names: any[]) {    
    this.namesList = names;
  }

  preview(files){
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files.target.files[0]); 
    reader.onload = (_event) => { 
    this.imgURL = reader.result; 
    this.previewLoaded = true; 
  }
}

onGallery(){
  const dialogRef = this.dialog.open(
    GalleryModalComponent,{
      width: 'auto',
      height: 'auto',
      data: {url: this.imgURL},
    });

  dialogRef.afterClosed().subscribe(result => {
  });
}

}
