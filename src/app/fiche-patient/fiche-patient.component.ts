import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiche-patient',
  templateUrl: './fiche-patient.component.html',
  styleUrls: ['./fiche-patient.component.css']
})
export class FichePatientComponent {

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








