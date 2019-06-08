import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

export interface DialogDatareq {
  request: string;
}

@Component({
  selector: 'app-reqtemplate',
  templateUrl: './reqtemplate.component.html',
  styleUrls: ['./reqtemplate.component.css']
})
export class ReqtemplateComponent implements OnInit {

  length:number=0;
  constructor( public dialogRef: MatDialogRef<ReqtemplateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDatareq) {
      // this.length=data.datasource.length;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
