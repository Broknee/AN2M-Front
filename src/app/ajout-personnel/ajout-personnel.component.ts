import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Services } from '../services/services';

@Component({
  selector: 'app-ajout-personnel',
  templateUrl: './ajout-personnel.component.html',
  styleUrls: ['./ajout-personnel.component.css']
})
export class AjoutPersonnelComponent {

  ajoutPersoForm : FormGroup;

 

  @Input() id!:Number  // on crée la variable ID 
  constructor( private fb: FormBuilder,private service:Services ){ 
    // on crée le constructeur composé du service et de la route
    {

      this.ajoutPersoForm = this.fb.group({
        nom: [''],
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
   
}
 
}
