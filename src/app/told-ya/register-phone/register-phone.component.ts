import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhonePipe } from 'src/app/common/phonepipe';

@Component({
  selector: 'app-register-phone',
  templateUrl: './register-phone.component.html',
  styleUrls: ['./register-phone.component.css'],
  providers: [PhonePipe]
})
export class RegisterPhoneComponent implements OnInit {

  @Input() public registerPhoneForm: FormGroup;
  @Output() public addPhoneEmit: EventEmitter<[any]> = new EventEmitter();
  @Output() public removePhoneEmit: EventEmitter<[any]> = new EventEmitter();
  public placeholder = 5142421234;
  @Input() public phoneIndex;
  public allInvited: boolean = false;

  constructor(  
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    //this.createForm();
  }

  public addPhone(){
    this.addPhoneEmit.emit(this.registerPhoneForm.get('phonenumber').value);
  }

  public createForm(){
    this.registerPhoneForm = this.formBuilder.group({
      phonenumber: ['', [Validators.required, Validators.pattern("[0-9]{10,}")]],
      allInvited: [this.allInvited, [Validators.required]]
    })
  }

  public removePhone(){
    this.removePhoneEmit.emit(this.phoneIndex)
  }

}