import { OnInit } from '@angular/core';
//https://material.angular.io/components/dialog/overview

import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { patientModel } from '../models/patient.model';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  patient!: patientModel;

constructor(public dialog: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public parentData: {patient : patientModel}) {}

ngOnInit(): void {
    this.patient = this.parentData.patient;
  }

closeModal() {
  this.dialog.close();
}
}



