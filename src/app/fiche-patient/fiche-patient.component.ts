import { ModalComponent } from './../modal/modal.component';
import { Component, Input, OnInit } from '@angular/core';
import { patientModel } from '../models/patient.model';
import { Services } from '../services/services';
import { ActivatedRoute } from '@angular/router';
import { SuiviModel } from '../models/suivi.model';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-fiche-patient',
  templateUrl: './fiche-patient.component.html',
  styleUrls: ['./fiche-patient.component.css']
})
export class FichePatientComponent {

  @Input() patient=new  patientModel()
  @Input() id!:Number
  @Input() commentsListById!: SuiviModel[]

  dialogConfig = new MatDialogConfig();
  modalDialog: MatDialogRef<ModalComponent, any> | undefined;

  constructor(private service : Services, private route: ActivatedRoute,public matDialog: MatDialog ) {}

  ngOnInit(): void { 
    this.id=this.route.snapshot.params["id"];
    console.log(this.id);

    this.patient = this.service.getlistePatientbyId(this.id); 
    console.log(this.patient); 
    this.commentsListById = this.service.getCommentsListById(this.id);
    //console.log(this.commentsListById);
    
  }
  hidden=true;
  Hidden=true;
  visiblity=true;
  Visibility=true;
  
    Suivivisible() {
      this.hidden = !this.hidden;
      if(this.Visibility==false)  this.Visibility=true;
      else this.Visibility=false;
}


Contactvisible() {
  this.Hidden = !this.Hidden;
  if(this.visiblity==false)  this.visiblity=true;
  else this.visiblity=false;
}

openModal() {
    this.dialogConfig.id = "modal";
    // this.dialogConfig.height = "500px";
    // this.dialogConfig.width = "650px";
    this.dialogConfig.data = { patient : this.patient };
    this.modalDialog = this.matDialog.open(ModalComponent, this.dialogConfig);
}
}








