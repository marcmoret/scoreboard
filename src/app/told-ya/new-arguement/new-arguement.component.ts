import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit, Input, Output } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';
import { RegisterPhoneComponent } from '../register-phone/register-phone.component';

@Component({
  selector: 'app-new-arguement',
  templateUrl: './new-arguement.component.html',
  styleUrls: ['./new-arguement.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService]
})
export class NewArguementComponent implements OnInit {

  public value: string = `<p>This is where you will put your main arguement. You can add pictures or links for context.</p> 

  <p>Try to make the arguement sound more like a question, which you will answer in your main points below and try to convince others that you are right. E.g., 'Should plastic straws be banned?'</p>`
  @Output() public arguementForm: FormGroup;
  public arguementValid = false;
  public phoneList: RegisterPhoneComponent[] = [];
  public phoneIndex;
  public secondPage: boolean = false;
  public allInvited: boolean = false;

  
  constructor(
    private formGroup:FormBuilder,
    ) { 

    }

  ngOnInit() {
    this.createForm();
    const mainA = this.arguementForm.controls['main'].valueChanges.subscribe(main =>{
    })
  }
  public createForm() {
    this.arguementForm = this.formGroup.group({
      main: [this.value],
      point1: ['', []],
      point2: ['', []],
      phonenumber: ['', [Validators.required, Validators.pattern("[0-9]{10,}")]],
      allInvited: [this.allInvited, [Validators.required]]
    })
  }

  public onNext(){
    this.secondPage = true;
  }

  public addPhoneEmit(event){
    console.log('fired');
    console.log(event);
    
    let phone = new RegisterPhoneComponent(this.formGroup);
    this.phoneList.push(phone)
  }

  public removePhoneEmit(index){
    this.phoneList.splice(index, 1)
  }

  public onAccept(){
    this.arguementValid = true;
    if(this.arguementForm.valid){
      
      let phone = new RegisterPhoneComponent(this.formGroup);
      this.phoneList.push(phone)
    }
  }

  public clearText(){
    let text = this.arguementForm.get('main').value;
    if(text === this.value){
      this.arguementForm.controls['main'].setValue('');
    }
  }

}