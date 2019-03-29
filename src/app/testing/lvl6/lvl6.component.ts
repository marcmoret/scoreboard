import { Component, OnInit, Directive, Output } from '@angular/core';
import { FormBuilder, Validators,FormGroup, AbstractControl } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
  selector: 'app-lvl6',
  templateUrl: './lvl6.component.html',
  styleUrls: ['./lvl6.component.css']
})

export class Lvl6Component implements OnInit {
  
 
  userForm: FormGroup;
  public confirmPassword: AbstractControl;
  public name: AbstractControl;
  public confirmEmail: AbstractControl;

  
  constructor(private formBuilder: FormBuilder) {}

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
 
}
