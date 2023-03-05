import { Input, OnInit } from '@angular/core';
//https://material.angular.io/components/dialog/overview

import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { patientModel } from '../models/patient.model';
import { SuiviModel } from '../models/suivi.model';
import { Services } from '../services/services';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


 @Input() selectedPatient$!: patientModel;
  ajoutComSuivi : FormGroup;
  commentaire= new  SuiviModel();
  emptyComment=false;


constructor(private fb:FormBuilder, private dialog: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) private parentData: {selectedPatient$ : patientModel},private service:Services) {}

ngOnInit(): void {

    this.selectedPatient$= this.parentData.selectedPatient$;

    this.ajoutComSuivi= this.fb.group({

      com: [''],
    });
  
  }



  onSubmit() {  if(this.ajoutComSuivi.value.com){
  this.dialog.close(this.ajoutComSuivi.value)}
     else this.emptyComment=true;
  }

closeModal() {
this.ajoutComSuivi.value.com="";
  this.dialog.close(this.ajoutComSuivi.value);
}



}



