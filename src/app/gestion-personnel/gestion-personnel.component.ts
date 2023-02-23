import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { personnelModel } from '../models/personnel.model';
import { Services } from '../services/services';

@Component({
  selector: 'app-gestion-personnel',
  templateUrl: './gestion-personnel.component.html',
  styleUrls: ['./gestion-personnel.component.css']
})

export class GestionPersonnelComponent implements OnInit {

  @Input() personnel!: personnelModel

  constructor(private personnelService: Services, private route : Router) {

}

ngOnInit(): void {}

getId() { // fonction getId pour créer la route correspond à l'ID de la carte
  this.route.navigateByUrl('modifierPersonnel/'+this.personnel.id) 
  console.log(this.personnel.id)
}
}