import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { patientModel } from '../models/patient.model';
import { personnelModel } from '../models/personnel.model';
import { Services } from '../services/services';

@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.css']
})
export class ListePatientComponent {


  @Input() listePatient!: patientModel[];
 @Input() patient!: patientModel

 



  constructor(private service : Services, private route : Router) {}

  ngOnInit(): void { 
    this.listePatient = this.service.getlistePatient();  
     
  }

  




}
