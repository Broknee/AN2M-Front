import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserDtoPost, UserGet} from '../models/personnel.model';
import { Services } from '../services/services';

@Component({
  selector: 'app-modifier-personnel',
  templateUrl: './modifier-personnel.component.html',
  styleUrls: ['./modifier-personnel.component.css']
})
export class ModifierPersonnelComponent implements OnInit {

  modifPersoForm : FormGroup;

  @ Input() modifPerso!: UserGet

  

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
    

  //   this.route.queryParams
  //   .filter(params => params.order)
  //   .subscribe(params => {
  //     console.log(params); // { order: "popular" }

  //     this.modifPerso= params.modifPerso;

  //     console.log(this.modifPerso); // popular
  //   }
  // );

    // this.route.queryParamMap.subscribe((params:any)=> console.log(params));
   this.id=this.route.snapshot.params["id"]
   console.log(this.id)
this.modifPerso=this.service.getlistePersonnelbyId(this.id)

    // this.modifPerso = this.service.getlistePersonnelbyId(this.id);
   // récupération de l'ID grâce à la propriété Snapshot 
   // la valeur est placée dans id, qui est déclarée plus haut 
  }

onSubmit() {
   
}
}






 


