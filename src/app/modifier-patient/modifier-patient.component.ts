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
 this.service.modifyPatient(this.selectedPatient$).subscribe({
  next: (data)=>console.log(data),
error: err=>console.log(err)
});
alert("les modifications ont été prises en compte")
this.router.navigateByUrl('/gestion_patient')
 }
}
