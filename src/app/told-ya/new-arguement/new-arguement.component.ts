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

  @ViewChild("registerPhone") registerPhone: RegisterPhoneComponent;
  public startMessage: string = `<p>This is where you will put your main arguement. You can add pictures or links for context.</p>`
  @Output() public arguementForm: FormGroup;
  public arguementValid = false;
  public phoneList: RegisterPhoneComponent[] = [];
  public phoneIndex;
  public secondPage: boolean = false;
  @Input() public arguement: Arguement
  @ViewChild(RegisterPhoneComponent) registerChild: RegisterPhoneComponent;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;

  
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    //this.createForm();
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: [this.startMessage, Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      arguement: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      arguement: ['', Validators.required]
    });
    this.fourthFormGroup = this.formBuilder.group({
      phone: [''],
    });
    this.fifthFormGroup = this.formBuilder.group({
      //fifthCtrl: ['', Validators.required]
    });
  }

  stepperDone(){
    console.log(this.firstFormGroup.value);
    
  }
  // public createForm() {
  //   this.arguementForm = this.formGroup.group({
  //     main: [this.startMessage],
  //     firstName: [this.arguement.firstName],
  //     secondName: [this.arguement.secondName],
  //     firstPoint: ['', []],
  //     secondPoint: ['', []],
  //   })
  // }

  // public onNext(){
  //   this.secondPage = true;
  // }

  public addPhoneEmit(event){
    let formGroup: FormBuilder;
    let phone = new RegisterPhoneComponent(formGroup);
    this.phoneList.push(phone)
  }

  public removePhoneEmit(index){
    this.phoneList.splice(index, 1)
  }

  // public onAccept(){
  //   if(this.arguementForm.valid){
  //     this.arguementValid = true;
  //     let phone = new RegisterPhoneComponent(this.formGroup);
  //     this.phoneList.push(phone)
  //   }
  // }

  public clearText(){
    let text = this.firstFormGroup.get('firstCtrl').value;
    if(text === this.startMessage){
      this.firstFormGroup.controls['firstCtrl'].setValue('');
    }
  }

  public onNext(){
        if(this.thirdFormGroup.valid){
          let formGroup: FormBuilder;
          let phone = new RegisterPhoneComponent(formGroup);
          this.phoneList.push(phone)
        }

  }

  public onGetNumbers(){
    //console.log(this.fourthFormGroup.get('phone').value);
    if(this.registerPhone.registerPhoneForm.valid){
      console.log(
        this.registerPhone.registerPhoneForm.get("phonenumber").value,
        this.registerPhone.registerPhoneForm.get("allInvited").value  
      )
    }
  }

  public test(){
    console.log(this.firstFormGroup);
    
  }

  // public submit(){
  //   if(this.registerChild.registerPhoneForm.valid){
  //     //this.arguementForm.addControl('phoneNumber', new FormControl(this.registerChild.registerPhoneForm.value, Validators.required));
  //     this.phoneList.forEach((form)=>{
  //       console.log(form)
  //     });
      
  //   }
  //   //console.log(this.arguementForm);
  // }

}