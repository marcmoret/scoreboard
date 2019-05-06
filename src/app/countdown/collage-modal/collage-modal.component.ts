import { Component, OnInit, Inject, Input, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../user';
import { OuterSubscriber } from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-collage-modal',
  templateUrl: './collage-modal.component.html',
  styleUrls: ['./collage-modal.component.css']
})
export class CollageModalComponent implements OnInit {

  public startWelcome: boolean = true;

  constructor(public dialogRef: MatDialogRef<CollageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User){
    }

  ngOnInit() {
    this.data? this.startWelcome = false : this.startWelcome = true;
  }
  dismiss(){
    this.dialogRef.close();
  }

  onBegin(){
    this.startWelcome = false;
  }

}
