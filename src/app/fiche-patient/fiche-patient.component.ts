import { ModalComponent } from './../modal/modal.component';
import { Component, Input} from '@angular/core';
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

  @Input() patient!: patientModel[]
  @Input() id!:number
  @Input() commentsListById: any=null
  @Input() selectedPatient$ !:patientModel
  @Input() commentaire = new SuiviModel()

  com:any


  dialogConfig = new MatDialogConfig();
  modalDialog: MatDialogRef<ModalComponent, any> | undefined;

  constructor(private service : Services, private route: ActivatedRoute,public matDialog: MatDialog ) {}

  ngOnInit(): void { 
  
    this.id=this.route.snapshot.params["id"] 
    this.service.selectedPatient$.subscribe((value) => {
      this.selectedPatient$ = value;
  })
  this.service.getSuivi(this.id).subscribe(
  data=>{console.log(data);
  this.commentsListById=data;}
);

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
    this.dialogConfig.data = { selectedPatient$ : this.selectedPatient$ };
    this.modalDialog = this.matDialog.open(ModalComponent, this.dialogConfig);
    this.modalDialog.afterClosed().subscribe({
  next: data=>{this.commentaire=data


  this.commentaire.patientid = this.selectedPatient$.id;
  this.commentaire.usersid = 11;
if(this.commentaire.com){
  this.service.addComSuivi(this.commentaire).subscribe({
   next: data=>{console.log(data)

   
   } ,error:err=>console.log(err)});
  

  }}}
  )


}


getComRecent():any {
      let com:any;
      for(let i=this.commentsListById.length-1;i>0;i--){
        com.push(this.commentsListById[i])
}  
   this.com=com;

  
  }
    
  }


