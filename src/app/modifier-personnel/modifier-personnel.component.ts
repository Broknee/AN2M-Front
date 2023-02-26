import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { personnelModel } from '../models/personnel.model';
import { Services } from '../services/services';

@Component({
  selector: 'app-modifier-personnel',
  templateUrl: './modifier-personnel.component.html',
  styleUrls: ['./modifier-personnel.component.css']
})
export class ModifierPersonnelComponent implements OnInit {

  modifPersoForm : FormGroup;

  modifPerso!: personnelModel

  @Input() id!:Number  // on crée la variable ID 
  constructor( private fb: FormBuilder,private service:Services, private route: ActivatedRoute ){ 
    // on crée le constructeur composé du service et de la route
    {

      this.modifPersoForm = this.fb.group({
        nom: [''],
        prenom:[''],
        mail: [''],
        mdp: [''],
  
      });
    } 
  }
  ngOnInit():void {
    this.id=this.route.snapshot.params["id"] 
   // récupération de l'ID grâce à la propriété Snapshot 
   // la valeur est placée dans id, qui est déclarée plus haut 
   this.modifPerso = this.service.getlistePersonnelbyId(this.id)
}

onSubmit() {
   
}
  }






 


