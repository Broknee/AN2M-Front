import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listSuiviModel, SuiviModel } from '../models/suivi.model';
import { Services } from '../services/services';

@Component({
  selector: 'app-suivi-patient',
  templateUrl: './suivi-patient.component.html',
  styleUrls: ['./suivi-patient.component.css']
})

export class SuiviPatientComponent {

@Input() id!:Number
@Input() commentsListById!: any
@Input() selectedPatient$ !:SuiviModel

constructor(private service : Services, private route: ActivatedRoute ) {}

ngOnInit(): void { 
  this.id=this.route.snapshot.params["id"] 
  // this.patient = this.service.getlistePatientbyId(this.id);  
  // this.commentsListById = this.service.getCommentsListById(this.id);
  // console.log(this.commentsListById);
  this.service.getSuivi(this.id).subscribe(
  data=>{console.log(data);
  this.commentsListById=data;}
);
}
}
