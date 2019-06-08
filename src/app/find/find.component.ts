import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import {defaultFormat as _rollupMoment} from 'moment';
import { TrackComponent } from '../track/track.component';
import { MatDialog } from '@angular/material';
import { ReqtemplateComponent } from '../reqtemplate/reqtemplate.component';
import { RestemplateComponent } from '../restemplate/restemplate.component';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

export interface Element1 {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element1[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];


@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class FindComponent implements OnInit {

  datecheck: boolean = false;
  date = new FormControl(moment);
  types = [
    {value: 'Gpid', viewValue: 'GPID'},
    {value: 'Dpid', viewValue: 'DPID'},
  ];

  seasons = ['Dev','DIT','GE1','GE2','GE3','GE4','Perf','Prod',];
  displayedColumns = ['CORRELATION_ID', 'SERVICE_NAME', 'CLIENT_ID', 'START_TIME','END_TIME',
  'REQUEST','RESPONSE','EXCEPTION_DETAIL','COUNTRY','REGION'];
  dataSource = ELEMENT_DATA;

  tpyeofID : string = null;
  idNum: string = null;
  environment : string = null;
  fromDate : Date = null; toDate : Date;
  showGrid: boolean =false;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  show() : void{
    this.showGrid=true;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TrackComponent, {
      width: '1000px',
      data: {datasource: this.dataSource}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openreqDialog(ele:string){
    const dialogRef = this.dialog.open(ReqtemplateComponent, {
      width: '1000px',
      height:'400px',
      data: {request: ele}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openresDialog(ele:string){
    const dialogRef = this.dialog.open(RestemplateComponent, {
      width: '1000px',
      height:'400px',
      data: {response: ele}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
