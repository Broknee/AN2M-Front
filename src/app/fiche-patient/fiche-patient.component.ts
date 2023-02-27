import { Component, Input, OnInit } from '@angular/core';
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
}








