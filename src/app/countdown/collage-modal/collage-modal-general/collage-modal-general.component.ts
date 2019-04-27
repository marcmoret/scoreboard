import { Component, OnInit } from '@angular/core';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { finalize } from 'rxjs/operators';
import { User } from '../../user';

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
  public today:Date = new Date();

  public downloadSrc: string;
  public collageProfilePath: any;
  collection: AngularFirestoreCollection;
  tempData: any;
  public names = [];
  public namesList: any[];
  imagePath: any;
  imgURL: any;
  previewLoaded = false;

  constructor(private afs: AngularFirestore, private afsStorage:AngularFireStorage){
    this.user.date = this.today.getDate();
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
          this.allDone(); // takes the img filePath and stores it as a string
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
    console.log(this.user);
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


}
