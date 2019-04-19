import { Component, OnInit, Directive, Output } from '@angular/core';
import { FormBuilder, Validators,FormGroup, AbstractControl } from '@angular/forms';
import { ValidationService } from './validation.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

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
  public downloadSrc: string ;

  
  constructor(private formBuilder: FormBuilder,
    private afsStorage:AngularFireStorage) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      confirmEmail: ['', [Validators.required]]
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
    this.task = this.ref.put(file.target.files[0])
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(()=> {
        this.ref.getDownloadURL().subscribe(url => {
          this.downloadSrc = url;
        });
      })
    ).subscribe(); //end
  }
 
}
