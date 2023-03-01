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

   @Input() selectedUser$ !:UserGet

 // @Input() id!:Number  // on crée la variable ID 
  constructor( private fb: FormBuilder,private service:Services, private route: ActivatedRoute ){ 
    // on crée le constructeur composé du service et de la route
    {

      this.modifPersoForm = this.fb.group({
        nom: [''],
        prenom:[''],
        mail: [''],
  
      });
    } 
  }
  ngOnInit():void {
    



this.service.selectedUser$.subscribe((value) => {
  this.selectedUser$ = value;
});



  }

onSubmit() {

  if(this.modifPersoForm.value.nom)
 { this.selectedUser$.lastName = this.modifPersoForm.value.nom}
 if(this.modifPersoForm.value.prenom)
 { this.selectedUser$.firstName = this.modifPersoForm.value.prenom}
 if(this.modifPersoForm.value.mail)
 { this.selectedUser$.email = this.modifPersoForm.value.mail}
 console.log(this.selectedUser$)
  

  this.service.modifyUser(this.selectedUser$).subscribe({
    next: (data)=>console.log(data),
  error: err=>console.log(err)
});
   




}
}






 


