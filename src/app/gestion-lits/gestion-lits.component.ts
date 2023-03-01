import { Component, Input, OnInit } from '@angular/core';
import { roomsList, Services } from '../services/services';
import { RoomModel } from '../models/room.model';
import { Router } from '@angular/router';
import { BedModel } from '../models/bed.model';
import { patientModel } from '../models/patient.model';

@Component({
  selector: 'app-gestion-lits',
  templateUrl: './gestion-lits.component.html',
  styleUrls: ['./gestion-lits.component.css']
})


export class GestionLitsComponent implements OnInit {
  
  curDate = new Date();

  @Input() rooms!: RoomModel [];
  @Input() beds!: BedModel [];
  @Input() patients!: patientModel [];
  
  constructor(private service : Services, private route : Router) {}
  
  ngOnInit(): void {
    this.rooms = this.service.getRoomsList();
    this.beds = this.service.getBedsList();
    // this.patients = this.service.getlistePatient();
  }
}
