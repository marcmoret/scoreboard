import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-gallery-modal',
    templateUrl: './gallery-modal.component.html',
    styleUrls: ['./gallery-modal.component.css']
  })
export class GalleryModalComponent implements OnInit {

constructor(public dialogRefs: MatDialogRef<GalleryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit(){
  }

}