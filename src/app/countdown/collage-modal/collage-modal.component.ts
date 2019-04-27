import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from 'src/app/testing/lvl5/lvl5.component';

@Component({
  selector: 'app-collage-modal',
  templateUrl: './collage-modal.component.html',
  styleUrls: ['./collage-modal.component.css']
})
export class CollageModalComponent implements OnInit {

  public startWelcome = false;

  constructor(public dialogRef: MatDialogRef<CollageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData){}

  

  ngOnInit() {
  }
  dismiss(){
    this.dialogRef.close();
  }

  onBegin(){
    this.startWelcome = true;
  }

}
