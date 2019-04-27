import { Component, OnInit } from '@angular/core';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-collage-modal',
  templateUrl: './collage-modal.component.html',
  styleUrls: ['./collage-modal.component.css']
})
export class CollageModalComponent implements OnInit {

  ref:AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress:Observable<number>;
  downloadURL: Observable<string>;
  uploading = false;

  public downloadSrc: string;
  public collageProfilePath: any;
  collection: AngularFirestoreCollection;
  tempData: any;
  public names = [];
  public namesList: any[];
  imagePath: any;
  imgURL: any;
  previewLoaded = false;

  constructor(private afs: AngularFirestore, private afsStorage:AngularFireStorage) {


   }

  ngOnInit() {
  }

  upload(file){
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afsStorage.ref(id);

    this.uploading = true;
    this.task = this.ref.put(this.imagePath.target.files[0])
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(()=> {
        this.ref.getDownloadURL().subscribe(url => {
          this.downloadSrc = url;
          this.afs.collection('collageProfiles').doc('Marco').set({'path':this.downloadSrc, 'date': 1, 'text': "big ol test"});
          this.allDone();
        });
      })
    ).subscribe(); //end
  }

  allDone(){
    this.collageProfilePath = this.afs.collection('collageProfiles').doc('Marco');

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
    console.log(this.namesList);
    
  }

  preview(files){
    console.log(files, this.imgURL);
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files.target.files[0]); 
    reader.onload = (_event) => { 
    this.imgURL = reader.result; 
    this.previewLoaded = true; 
  }
}

}
