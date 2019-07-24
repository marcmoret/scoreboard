import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-new-arguement',
  templateUrl: './new-arguement.component.html',
  styleUrls: ['./new-arguement.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService]
})
export class NewArguementComponent implements OnInit {

  public value: string = `<p>This is where you will put your main arguement. You can add pictures or links for context.</p> 

  <p>Try to make the arguement sound more like a question, which you will answer in your main points below and try to convince others that you are right. E.g., 'Should plastic straws be banned?'</p>`
  public arguementForm: FormGroup;
  
  constructor(private formGroup:FormBuilder) { }

  ngOnInit() {
    this.createForm();
    const mainA = this.arguementForm.controls['main'].valueChanges.subscribe(main =>{
      console.log(main);
      
    })
  }
  public createForm() {
    this.arguementForm = this.formGroup.group({
      main: [this.value],
      point1: ['', [Validators.required]],
      point2: ['', [Validators.required]]
    })
  }

  test(){
  }

}
