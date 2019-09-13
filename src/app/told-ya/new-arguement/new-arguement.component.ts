import { Arguement } from './../../models/arguement';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';
import { RegisterPhoneComponent } from '../register-phone/register-phone.component';

@Component({
  selector: 'app-new-arguement',
  templateUrl: './new-arguement.component.html',
  styleUrls: ['./new-arguement.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService]
})
export class NewArguementComponent implements OnInit {

  public startMessage: string = `<p>This is where you will put your main arguement. You can add pictures or links for context.</p>`
  @Output() public arguementForm: FormGroup;
  public arguementValid = false;
  public phoneList: RegisterPhoneComponent[] = [];
  public phoneIndex;
  public secondPage: boolean = false;
  @Input() public arguement: Arguement
  @ViewChild(RegisterPhoneComponent, {static: false}) registerChild: RegisterPhoneComponent;
  
  constructor(
    private formGroup:FormBuilder,
    ) { }

  ngOnInit() {
    this.createForm();
  }
  public createForm() {
    this.arguementForm = this.formGroup.group({
      main: [this.startMessage],
      firstName: [this.arguement.firstName],
      secondName: [this.arguement.secondName],
      firstPoint: ['', []],
      secondPoint: ['', []],
    })
  }

  public onNext(){
    this.secondPage = true;
  }

  public addPhoneEmit(event){
    let phone = new RegisterPhoneComponent(this.formGroup);
    this.phoneList.push(phone)
  }

  public removePhoneEmit(index){
    this.phoneList.splice(index, 1)
  }

  public onAccept(){
    if(this.arguementForm.valid){
      this.arguementValid = true;
      let phone = new RegisterPhoneComponent(this.formGroup);
      this.phoneList.push(phone)
    }
  }

  public clearText(){
    let text = this.arguementForm.get('main').value;
    if(text === this.startMessage){
      this.arguementForm.controls['main'].setValue('');
    }
  }

  public submit(){
    if(this.registerChild.registerPhoneForm.valid){
      //this.arguementForm.addControl('phoneNumber', new FormControl(this.registerChild.registerPhoneForm.value, Validators.required));
      this.phoneList.forEach((form)=>{
        console.log(form)
      });
      
    }
    //console.log(this.arguementForm);
  }

}