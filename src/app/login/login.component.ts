import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
 
  contactForm : FormGroup;


  constructor(private fb: FormBuilder, private route:  Router) { 

    this.contactForm = this.fb.group({
      mail: [''],
      mdp: [''],
    });
  }

  onSubmit() {
    this.route.navigateByUrl('/accueil_admin') 
  }
  

}
