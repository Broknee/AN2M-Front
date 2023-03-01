import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDtoPost} from '../models/personnel.model';
import { Services } from '../services/services';

@Component({
  selector: 'app-ajout-personnel',
  templateUrl: './ajout-personnel.component.html',
  styleUrls: ['./ajout-personnel.component.css']
})
export class AjoutPersonnelComponent {

  ajoutPersoForm : FormGroup;
  @Input() ajoutPerson= new  UserDtoPost();
 

  //@Input() id!:Number  // on crée la variable ID 
  constructor( private fb: FormBuilder,private service:Services ){ 
    // on crée le constructeur composé du service et de la route
    

      this.ajoutPersoForm = this.fb.group({

        nom: [''],
        prenom: [''],
        username:[''],
        mail: [''],
        mdp: [''],
        roles:['']
      });
     
  }
  ngOnInit():void { }
   
   
    onSubmit() {
      
      
   this.ajoutPerson.password = this.ajoutPersoForm.value.mdp;
   this.ajoutPerson.assignation=this.ajoutPersoForm.value.roles;
      this.ajoutPerson.lastName = this.ajoutPersoForm.value.nom;
      this.ajoutPerson.firstName= this.ajoutPersoForm.value.prenom;
  this.ajoutPerson.email = this.ajoutPersoForm.value.mail;
    console.log(this.ajoutPerson.password)
 //this.ajoutPerson = this.ajoutPersoForm.value;

 
   


   console.log(this.ajoutPerson)

   this.service.postUser(this.ajoutPerson).subscribe({
     next: (data)=>console.log(data),
   error: err=>console.log(err)
 });
   
}
 
}
