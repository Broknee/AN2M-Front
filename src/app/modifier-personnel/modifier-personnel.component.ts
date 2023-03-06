import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDtoPost, UserGet} from '../models/personnel.model';
import { Services } from '../services/services';

@Component({
  selector: 'app-modifier-personnel',
  templateUrl: './modifier-personnel.component.html',
  styleUrls: ['./modifier-personnel.component.css']
})
export class ModifierPersonnelComponent implements OnInit {
  submitted = false;
  modifPersoForm : FormGroup;

   @ Input() modifPerso!: UserGet

   @Input() selectedUser$ !:UserGet


  constructor( private fb: FormBuilder,private service:Services, private route: ActivatedRoute, private router: Router ){ 

    {

      this.modifPersoForm = this.fb.group({
        nom: ['',],
        prenom:['',],
        mail: ['', Validators.email],
  
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
 this.submitted = true;
 if (this.modifPersoForm.invalid) {
  return;
}



  this.service.modifyUser(this.selectedUser$).subscribe({
    next: (data)=>console.log(data),
  error: err=>console.log(err)
});
alert("les modifications ont été prises en compte")
this.router.navigateByUrl('/gestion_personnel')

}
}






 


