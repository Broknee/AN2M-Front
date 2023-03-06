import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { patientModel } from '../models/patient.model';
import { SuiviModel } from '../models/suivi.model';
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
@Input() patient!:patientModel

constructor(private service : Services, private route: ActivatedRoute ) {}

ngOnInit(): void { 
  this.id=this.route.snapshot.params["id"] 
  this.service.getSuivi(this.id).subscribe(
  data=>{console.log(data);
  this.commentsListById=data;}
);
this.service.selectedPatient$.subscribe(
  data=>this.patient=data
)}
}
