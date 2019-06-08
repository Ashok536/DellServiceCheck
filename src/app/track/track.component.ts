import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Element1 } from '../grid/grid.component';

export interface DialogData {
  datasource: Element1[];
}

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  length:number=0;
  constructor( public dialogRef: MatDialogRef<TrackComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.length=data.datasource.length;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
