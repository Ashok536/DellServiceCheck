import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ReqtemplateComponent } from '../reqtemplate/reqtemplate.component';

export interface DialogDatares {
  response: string;
}

@Component({
  selector: 'app-restemplate',
  templateUrl: './restemplate.component.html',
  styleUrls: ['./restemplate.component.css']
})
export class RestemplateComponent implements OnInit {


  constructor( public dialogRef: MatDialogRef<ReqtemplateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDatares) {

    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }


}
