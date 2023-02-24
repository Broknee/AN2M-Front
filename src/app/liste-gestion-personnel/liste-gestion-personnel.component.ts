import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { personnelModel } from '../models/personnel.model';
import { Services } from '../services/services';

@Component({
  selector: 'app-liste-gestion-personnel',
  templateUrl: './liste-gestion-personnel.component.html',
  styleUrls: ['./liste-gestion-personnel.component.css']
})
export class ListeGestionPersonnelComponent implements OnInit {

  @Input() listePersonnel!: personnelModel[];

  @Input() person!: personnelModel



  constructor(private service : Services, private route : Router) {}

  ngOnInit(): void { 
    // accolades pour objet
    this.listePersonnel = this.service.getlistePersonnel();

    
  }

  
  getId() { // fonction getId pour créer la route correspond à l'ID de la carte
    this.route.navigateByUrl('modifier_personnel/'+this.person.id) 
    console.log(this.person.id)
  }



}
