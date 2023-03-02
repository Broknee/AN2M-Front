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
  


constructor(private fb:FormBuilder, private dialog: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) private parentData: {selectedPatient$ : patientModel},private service:Services) {}

ngOnInit(): void {

    this.selectedPatient$= this.parentData.selectedPatient$;

    this.ajoutComSuivi= this.fb.group({

      com: [''],
    });
  
  }



  onSubmit() {
  
      this.commentaire.com = this.ajoutComSuivi.value.com;
      this.commentaire.patientid = this.selectedPatient$.id;
      console.log(this.commentaire.patientid)
      this.commentaire.usersid = 37;
      this.service.addComSuivi(this.commentaire).subscribe(
        data=>console.log(data)
      )
        console.log("COMMENTAIRE="+this.commentaire.com);
        console.log(this.selectedPatient$.id);
    

    }


closeModal() {
  this.dialog.close();
}



}



