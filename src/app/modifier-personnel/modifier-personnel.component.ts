import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifier-personnel',
  templateUrl: './modifier-personnel.component.html',
  styleUrls: ['./modifier-personnel.component.css']
})
export class ModifierPersonnelComponent implements OnInit {

  modifPersoForm : FormGroup;


  ngOnInit() {}





  constructor(private fb: FormBuilder, private route:  Router) { 

    this.modifPersoForm = this.fb.group({
      nom: [''],
      prenom:[''],
      mail: [''],
      mdp: [''],

    });
  }

  onSubmit() {
   
  }

}
