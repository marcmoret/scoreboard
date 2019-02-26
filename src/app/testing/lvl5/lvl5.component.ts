import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { PopupComponent } from './popup/popup.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-lvl5',
  templateUrl: './lvl5.component.html',
  styleUrls: ['./lvl5.component.css']
})
export class Lvl5Component implements OnInit {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit(){
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
