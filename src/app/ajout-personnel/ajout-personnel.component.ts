import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDtoPost } from '../models/personnel.model';
import { Services } from '../services/services';

@Component({
  selector: 'app-ajout-personnel',
  templateUrl: './ajout-personnel.component.html',
  styleUrls: ['./ajout-personnel.component.css'],
})
export class AjoutPersonnelComponent {
  ajoutPersoForm: FormGroup;
  @Input() ajoutPerson = new UserDtoPost();
  Errors: string = '';
  validErrors: boolean = false;
 

  //@Input() id!:Number  // on crée la variable ID
  constructor(
    private fb: FormBuilder,
    private service: Services,
    private route: Router
  ) {
    // on crée le constructeur composé du service et de la route

    this.ajoutPersoForm = this.fb.group({
      nom: [''],
      prenom: [''],
      username: [''],
      mail: ['',Validators.email],
      mdp: [''],
      roles: [''],
    });
  }
  ngOnInit(): void {}

  onSubmit() {

  

    if (
      !(
        this.ajoutPersoForm.value.mdp.length == 0 ||
        this.ajoutPersoForm.value.roles.length == 0 ||
        this.ajoutPersoForm.value.nom.length == 0 ||
        this.ajoutPersoForm.value.prenom.length == 0 ||
        this.ajoutPersoForm.value.mail.length == 0
      )
    ) {
      this.ajoutPerson.password = this.ajoutPersoForm.value.mdp;
      this.ajoutPerson.assignation = this.ajoutPersoForm.value.roles;
      this.ajoutPerson.lastName = this.ajoutPersoForm.value.nom;
      this.ajoutPerson.firstName = this.ajoutPersoForm.value.prenom;
      this.ajoutPerson.email = this.ajoutPersoForm.value.mail;

      this.service.postUser(this.ajoutPerson).subscribe({
        next: (data) => console.log(data),
        error: (err) => { console.log(err);
          this.route.navigateByUrl('gestion_personnel')},
      });
      ;
    } else {
      this.Errors = ' Tous les champs sont obligatoires';
      this.validErrors = true;
    }
  }


}
