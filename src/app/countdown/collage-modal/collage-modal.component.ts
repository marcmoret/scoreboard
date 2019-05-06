import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from 'src/app/testing/lvl5/lvl5.component';
import { User } from '../user';

@Component({
  selector: 'app-collage-modal',
  templateUrl: './collage-modal.component.html',
  styleUrls: ['./collage-modal.component.css']
})
export class CollageModalComponent implements OnInit {

  public startWelcome: boolean;
  public currentCollage: User;

  constructor(public dialogRef: MatDialogRef<CollageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData){}

  

  ngOnInit() {
    this.currentCollage? this.startWelcome = false : this.startWelcome = true;
  }
  dismiss(){
    this.dialogRef.close();
  }

  onBegin(){
    this.startWelcome = false;
  }

}
