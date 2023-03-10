import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { patientModel } from '../models/patient.model';
import { SuiviModel } from '../models/suivi.model';
import { Services } from '../services/services';

@Component({
  selector: 'app-modifier-patient',
  templateUrl: './modifier-patient.component.html',
  styleUrls: ['./modifier-patient.component.css']
})
export class ModifierPatientComponent {
  @Input() patient!: patientModel
  @Input() id!:number
  @Input() selectedPatient$ !:patientModel


  modifPatientForm : FormGroup;
  @Input() ajoutPatient= new  patientModel();

  constructor(private fb: FormBuilder,private service : Services, private route: ActivatedRoute, private router: Router ) {


    this.modifPatientForm = this.fb.group({
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

  ngOnInit(): void { 
    this.id=this.route.snapshot.params["id"] 
    // this.patient = this.service.getlistePatientbyId(this.id);  
    // this.commentsListById = this.service.getCommentsListById(this.id);
    // console.log(this.commentsListById);
    this.service.selectedPatient$.subscribe((value) => {
      this.selectedPatient$ = value;
  })

  }

 onSubmit(){  
  if(this.modifPatientForm.value.nom)
  { this.selectedPatient$.nom = this.modifPatientForm.value.nom}
  if(this.modifPatientForm.value.prenom)
  { this.selectedPatient$.prenom = this.modifPatientForm.value.prenom}
  if(this.modifPatientForm.value.secu)
  { this.selectedPatient$.secu = this.modifPatientForm.value.secu}
  if(this.modifPatientForm.value.tel)
  { this.selectedPatient$.tel = this.modifPatientForm.value.tel}
  if(this.modifPatientForm.value.mail)
  {this.selectedPatient$.mail = this.modifPatientForm.value.mail}
  if(this.modifPatientForm.value.adresse)
  { this.selectedPatient$.adresse = this.modifPatientForm.value.adresse}
  if(this.modifPatientForm.value.raison_sejour)
  { this.selectedPatient$.raison_sejour = this.modifPatientForm.value.raison_sejour}
  if(this.modifPatientForm.value.date_entree)
  { this.selectedPatient$.date_entree = this.modifPatientForm.value.date_entree}
  if(this.modifPatientForm.value.date_sortie)
  { this.selectedPatient$.date_sortie = this.modifPatientForm.value.date_sortie}
  if(this.modifPatientForm.value.nom_urgent)
  { this.selectedPatient$.nom_urgent = this.modifPatientForm.value.nom_urgent}
  if(this.modifPatientForm.value.prenom_urgent)
  { this.selectedPatient$.prenom_urgent = this.modifPatientForm.value.prenom_urgent}
  if(this.modifPatientForm.value.tel_urgent)
  { this.selectedPatient$.tel_urgent = this.modifPatientForm.value.tel_urgent}
  console.log(this.modifPatientForm.value.date_entree)
 this.service.modifyPatient(this.selectedPatient$).subscribe({
  next: (data)=>console.log(data),
error: err=>console.log(err)
});
alert("les modifications ont ??t?? prises en compte")
this.router.navigateByUrl('/gestion_patient')
 }
}
