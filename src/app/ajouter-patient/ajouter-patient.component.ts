import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { patientModel } from '../models/patient.model';
import { UserDtoPost } from '../models/personnel.model';
import { Services } from '../services/services';

@Component({
  selector: 'app-ajouter-patient',
  templateUrl: './ajouter-patient.component.html',
  styleUrls: ['./ajouter-patient.component.css']
})
export class AjouterPatientComponent {


  ajoutPatientForm : FormGroup;
  @Input() ajoutPatient= new  patientModel();
 

  //@Input() id!:Number  // on crée la variable ID 
  constructor( private fb: FormBuilder,private service:Services ){ 
    // on crée le constructeur composé du service et de la route
    

      this.ajoutPatientForm = this.fb.group({

        nom: [''],
        prenom: [''],
        secu:[''],
        tel: [''],
        mail: [''],
        adresse:[''],
        raison_sejour:[''],
        date_entree:[''],
        date_sortie:[''],
        nom_urgent:[''],
        prenom_urgent:[''],
        tel_urgent:[''],

      });
     
  }
  ngOnInit():void { }
   
   
    onSubmit() {
      
      
   this.ajoutPatient= this.ajoutPatientForm.value;
   this.ajoutPatient.nom = this.ajoutPatientForm.value.nom;
   this.ajoutPatient.prenom = this.ajoutPatientForm.value.prenom;
   this.ajoutPatient.secu = this.ajoutPatientForm.value.secu;
   this.ajoutPatient.tel = this.ajoutPatientForm.value.tel;
   this.ajoutPatient.mail = this.ajoutPatientForm.value.mail;
   this.ajoutPatient.adresse = this.ajoutPatientForm.value.adresse;
   this.ajoutPatient.raison_sejour = this.ajoutPatientForm.value.raison_sejour;
   this.ajoutPatient.date_entree = this.ajoutPatientForm.value.date_entree;
   this.ajoutPatient.date_sortie = this.ajoutPatientForm.value.date_sortie;
   this.ajoutPatient.nom_urgent = this.ajoutPatientForm.value.nom_urgent;
   this.ajoutPatient.prenom_urgent = this.ajoutPatientForm.value.prenom_urgent;
   this.ajoutPatient.tel_urgent = this.ajoutPatientForm.value.tel_urgent;
  

   console.log(this.ajoutPatient)
   this.service.addPatient(this.ajoutPatient).subscribe({
    next: (data)=>console.log(data),
  error: err=>console.log(err)
});
   
}
 
}




