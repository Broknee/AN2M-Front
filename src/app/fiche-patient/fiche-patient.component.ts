import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { patientModel } from '../models/patient.model';
import { Services } from '../services/services';

@Component({
  selector: 'app-fiche-patient',
  templateUrl: './fiche-patient.component.html',
  styleUrls: ['./fiche-patient.component.css']
})
export class FichePatientComponent {

  @Input() listePatient!: patientModel[];
  @Input() patient!: patientModel

  constructor(private service : Services, private route : Router) {}

  ngOnInit(): void { 
    this.listePatient = this.service.getlistePatient();  
     
  }
}
