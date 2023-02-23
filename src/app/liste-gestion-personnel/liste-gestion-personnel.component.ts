import { Component, Input, OnInit } from '@angular/core';
import { personnelModel } from '../models/personnel.model';
import { Services } from '../services/services';

@Component({
  selector: 'app-liste-gestion-personnel',
  templateUrl: './liste-gestion-personnel.component.html',
  styleUrls: ['./liste-gestion-personnel.component.css']
})
export class ListeGestionPersonnelComponent implements OnInit {

  @Input() listePersonnel!: personnelModel[];
  constructor(private service : Services) {}

  ngOnInit(): void { 
    // accolades pour objet
    this.listePersonnel = this.service.getlistePersonnel();
  }


}
