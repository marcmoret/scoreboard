import { Component, OnInit, Directive, Output } from '@angular/core';
import { FormBuilder, Validators,FormGroup, AbstractControl } from '@angular/forms';
import { ValidationService } from './validation.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CollageModalComponent } from 'src/app/countdown/collage-modal/collage-modal.component';

@Component({
  selector: 'app-lvl6',
  templateUrl: './lvl6.component.html',
  styleUrls: ['./lvl6.component.css']
})

export class Lvl6Component implements OnInit {
 
  ref:AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress:Observable<number>;
  downloadURL: Observable<string>;
  uploading = false;
 
  userForm: FormGroup;
  public confirmPassword: AbstractControl;
  public name: AbstractControl;
  public confirmEmail: AbstractControl;
  public downloadSrc: string;
  public collageProfilePath: any;
  collection: AngularFirestoreCollection;
  tempData: any;
  public names = [];
  public namesList: any[];
  imagePath: any;
  imgURL: any;
  previewLoaded = false;
  config: MatDialogConfig = {
    disableClose: false,
    hasBackdrop: true,
    backdropClass: '',
    width: 'auto',
    height: 'auto',
    position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
    }
  }
  private _albums = [];
  public album = {
    src: this.imgURL,
    caption: '',
    thumb: ''
 };
  
  constructor(private formBuilder: FormBuilder,
    private afsStorage:AngularFireStorage,
    private dialog: MatDialog,
    private afs: AngularFirestore,
    ) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      confirmEmail: ['', [Validators.required]]
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(
      CollageModalComponent, this.config);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      console.log(this.userForm.controls.name.invalid, this.userForm.controls.confirmPassword.invalid, this.userForm)
    }
   // const user = this.userForm.get('userForm')
    this.confirmEmail = this.userForm.get('confirmEmail');
    console.log(this.confirmEmail.value )
    //console.log(this.userForm.get('confirmEmail'))
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
