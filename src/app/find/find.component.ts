import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

export class searchform{
 constructor(
  typeid: string,
  idnum: string,
  fromDt:Date,
  toDt: Date,
  envi:string){}
}

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  types = [
    {value: 'Gtid', viewValue: 'GTID'},
    {value: 'Dfid', viewValue: 'DFSID'},
  ];

  seasons = ['Dev','DIT','GE1','GE2','GE3','GE4','Prod'];

  tpyeofID : string = null;
  idNum: string = null;
  environment : string = null;
  fromDate : Date; toDate : Date;
  showGrid: boolean =false;
  
  constructor() { }

  ngOnInit() {
  }

  show() : void{
    this.showGrid=true;
  }
}
