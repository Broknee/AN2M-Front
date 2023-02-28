import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDtoPost, UserGet } from '../models/personnel.model';
import { Services } from '../services/services';

@Component({
  selector: 'app-ajout-personnel',
  templateUrl: './ajout-personnel.component.html',
  styleUrls: ['./ajout-personnel.component.css']
})
export class AjoutPersonnelComponent {

  ajoutPersoForm : FormGroup;
  ajouPerson!:UserDtoPost
 

  @Input() id!:Number  // on crée la variable ID 
  constructor( private fb: FormBuilder,private service:Services ){ 
    // on crée le constructeur composé du service et de la route
    {

      this.ajoutPersoForm = this.fb.group({
       
        nom: ['',Validators.requiredTrue],
        prenom:[''],
        username:[''],
        mail: [''],
        mdp: [''],
        role:['']
      });
    } 
  }
  ngOnInit():void {}
   
   
    onSubmit() {

      console.log(this.ajoutPersoForm.value)
 this.ajouPerson = this.ajoutPersoForm.value;
 this.ajouPerson.lastName = this.ajoutPersoForm.value.nom
 
   this.ajouPerson.firstName = this.ajoutPersoForm.value.prenom
  
  this.ajouPerson.email = this.ajoutPersoForm.value.mail

   this.ajouPerson.password = this.ajoutPersoForm.value.mdp
   this.ajouPerson.assignation[0]=this.ajoutPersoForm.value.role

   
 
   this.service.postUser(this.ajouPerson).subscribe({
     next: (data)=>console.log(data),
   error: err=>console.log(err)
 });
   
}
 
}
