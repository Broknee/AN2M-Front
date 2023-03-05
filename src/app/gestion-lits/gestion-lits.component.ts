import { Component, Input, OnInit } from '@angular/core';
import {  Services } from '../services/services';
import { RoomModel } from '../models/room.model';
import { Router } from '@angular/router';
import { BedModel } from '../models/bed.model';
import { patientModel } from '../models/patient.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-gestion-lits',
  templateUrl: './gestion-lits.component.html',
  styleUrls: ['./gestion-lits.component.css']
})


export class GestionLitsComponent implements OnInit {
  
  curDate = new Date();

  @Input() rooms: RoomModel [];
  @Input() beds!: any ;
  @Input() patients!: patientModel [];
  
  constructor(private service : Services, private route : Router) {}
  
  ngOnInit(): void {
    this.rooms=[]
    this.patients=[]
    
    this.service.getBedsList().subscribe( {next: data=>{ this.beds=data;
     
      console.log(data)},
      complete: ()=> this.getRoomsAndPatients(),
    error :  err=>console.log(err)
    
    });

    //console.log(this.beds.length)

   
    //this.beds = this.service.getBedsList();
    // this.patients = this.service.getlistePatient();
  }

  getRoomsAndPatients(){
let rooms=new Map();
console.log("taille des lits:"+this.beds.length)
//console.log(this.beds)
 for(let bed of this.beds){
    
      rooms.set(bed.chambre.id,bed.chambre.numero_chambre);
     this.patients.push(bed.patient)

 }
 console.log(this.patients[0].nom)
 console.log(rooms.size)
 let i=0
 for(let entry of rooms.entries()){
console.log(entry[0])
  //if(this.rooms.includes(entry[0])) continue
this.rooms.push(entry[1])

//this.rooms=new set(rooms.Map())
 }
 

console.log("les patients:"+this.patients)
  

    
  }
}
