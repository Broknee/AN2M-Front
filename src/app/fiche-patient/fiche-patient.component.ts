import { Component, Input, OnInit } from '@angular/core';
import { patientModel } from '../models/patient.model';
import { Services } from '../services/services';
import { ActivatedRoute } from '@angular/router';
import { SuiviModel } from '../models/suivi.model';

@Component({
  selector: 'app-fiche-patient',
  templateUrl: './fiche-patient.component.html',
  styleUrls: ['./fiche-patient.component.css']
})
export class FichePatientComponent {

  @Input() patient!: patientModel
  @Input() id!:number
  @Input() commentsListById!: SuiviModel[]
  @Input() selectedPatient$ !:patientModel
  @Input() commentaire = new SuiviModel()


  constructor(private service : Services, private route: ActivatedRoute ) {}

  ngOnInit(): void { 
    this.id=this.route.snapshot.params["id"] 
    // this.patient = this.service.getlistePatientbyId(this.id);  
    // this.commentsListById = this.service.getCommentsListById(this.id);
    // console.log(this.commentsListById);
    this.service.selectedPatient$.subscribe((value) => {
      this.selectedPatient$ = value;
  })

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


ajoutCommentaire() {

    this.commentaire.comm = "Piqure faite à 8h";
    this.commentaire.patient_id = this.id;
    this.commentaire.users_id = 37;
    this.service.addComSuivi(this.commentaire).subscribe(
      data=>console.log(data)
    )
      console.log("COMMENTAIRE="+this.commentaire.comm);
}








}








