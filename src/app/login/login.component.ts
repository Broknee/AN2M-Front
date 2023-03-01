import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
 
  contactForm : FormGroup;
 submitted = false;


  constructor(private fb: FormBuilder, private route:  Router) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      username: ['',Validators.required],
      mdp: ['',Validators.required],
    });
  }

    
  

  onSubmit() {
    this.submitted = true;
    if(this.contactForm.invalid) {
      alert("les informations saisies ne sont pas valides")
      return;}

    alert('authentification valide')
    this.route.navigateByUrl('/accueil_admin') 
  }
  
  onReset() {
    this.submitted = false;
    this.contactForm.reset();
}

}
