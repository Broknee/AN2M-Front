import { Component, Input, OnInit } from '@angular/core';
import {  Router} from '@angular/router';
import { UserGet } from '../models/personnel.model';
import { Services } from '../services/services';

@Component({
  selector: 'app-liste-gestion-personnel',
  templateUrl: './liste-gestion-personnel.component.html',
  styleUrls: ['./liste-gestion-personnel.component.css']
})
export class ListeGestionPersonnelComponent implements OnInit {



@Input() users!: UserGet[];
searchText!: any;




  constructor(private service : Services, private route :Router) {}

  ngOnInit(): void { 


this.service.getUsers().subscribe(data=>{
this.users=data;
console.log(data)});
     
  }

modifier(person:any) {
  this.service.post=this.users;
  this.service.setUser(person)
  this.route.navigateByUrl('modifier_personnel/'+person.id)
    
  
  
}




}