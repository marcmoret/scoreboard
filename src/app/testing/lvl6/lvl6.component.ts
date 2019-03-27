import { Component, OnInit, Directive, Output } from '@angular/core';
import { FormBuilder, Validators,FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-lvl6',
  templateUrl: './lvl6.component.html',
  styleUrls: ['./lvl6.component.css']
})

export class Lvl6Component implements OnInit {
  
 
  userForm: FormGroup;
  public confirmPassword: AbstractControl;

  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      console.log(this.userForm.value.name, this.userForm.value.confirmPassword, this.userForm)
    }
 }
 
}
