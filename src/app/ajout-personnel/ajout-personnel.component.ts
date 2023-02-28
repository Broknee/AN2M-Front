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
  ajoutPerso!: UserDtoPost;
  ajoutPerson!: UserDtoPost;
 

  @Input() id!:Number  // on crée la variable ID 
  constructor( private fb: FormBuilder,private service:Services ){ 
    // on crée le constructeur composé du service et de la route
    {

      this.ajoutPersoForm = this.fb.group({
        nom: ['',Validators.required],
        prenom:['',Validators.required],
        // username:[''],
        mail: ['',Validators.required],
        mdp: ['',Validators.required],
        roles:['',Validators.required]
      });
    } 
  }
  ngOnInit():void {}
   

    onSubmit() {
      // this.ajoutPerso.lastName = this.ajoutPersoForm.value.nom;
      // this.ajoutPerso.firstName = this.ajoutPersoForm.value.prenom;
      // this.ajoutPerso.email = this.ajoutPersoForm.value.mail;
      // this.ajoutPerso.password = this.ajoutPersoForm.value.mdp;
      // this.service.postUser(this.ajoutPerso).subscribe({
        
    // });
    // console.log(this.ajoutPerso)


    this.ajoutPerson = this.ajoutPersoForm.value;
 this.ajoutPerson.lastName = this.ajoutPersoForm.value.nom
 
   this.ajoutPerson.firstName = this.ajoutPersoForm.value.prenom

  this.ajoutPerson.email = this.ajoutPersoForm.value.mail

   this.ajoutPerson.password = this.ajoutPersoForm.value.mdp
   this.ajoutPerson.roles=this.ajoutPersoForm.value.roles
      console.log(this.ajoutPerson)
      this.service.postUser(this.ajoutPerson).subscribe({
        next: (data)=>console.log(data),
      error: err=>console.log(err)
    });
}
 
}
