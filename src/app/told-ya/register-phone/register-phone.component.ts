import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-phone',
  templateUrl: './register-phone.component.html',
  styleUrls: ['./register-phone.component.css']
})
export class RegisterPhoneComponent implements OnInit {

  public registerPhoneForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  public createForm(){
    this.registerPhoneForm = this.formBuilder.group({
      phonenumber: ['', [Validators.required]]
    })
  }

}