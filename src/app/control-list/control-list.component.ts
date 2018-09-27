import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-control-list',
  templateUrl: './control-list.component.html',
  styleUrls: ['./control-list.component.css']
})
export class ControlListComponent implements OnInit {

facility = new FormControl();
facilityList: string[] = ['MQRQUETTE', 'BALDWIN', 'MADISON'];
report = new FormControl();
reportList: string[] = ['Basic Report', 'Pass and Method', 'Phone List','Physician Name'];
method = new FormControl();
methodList: string[] = ['0 Request Chart', '1 Doctor Letter', '2 Contact Letter','3 Phone','4 Other hospital','5 Other','6 Patient Letter','7 Lost'];
pass = new FormControl();
passList: string[] = ['1', '2', '3','9','All'];
month = new FormControl();
monthList: string[] = ['All','January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
sort = new FormControl();
sortList: string[] = ['Name', 'Accession Number', 'Physician','Site','Medical Record Number [Sequential]','Terminal Digit [Medical Record Number]'];
letter = new FormControl();
letterList: string[] = ['All', 'A- SAMPLE LETTER [PATIENT, A]', 'B- SAMPLE LETTER [PATIENT, B]'];
medical = new FormControl();
medicalList: string[] = ['Any', 'Terminal Digit Range', 'Standard range'];

  constructor() { }

  ngOnInit() {
  }

}
