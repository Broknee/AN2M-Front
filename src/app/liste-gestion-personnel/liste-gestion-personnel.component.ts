import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router} from '@angular/router';
import { UserDtoPost, UserGet } from '../models/personnel.model';
import { Services } from '../services/services';

@Component({
  selector: 'app-liste-gestion-personnel',
  templateUrl: './liste-gestion-personnel.component.html',
  styleUrls: ['./liste-gestion-personnel.component.css']
})
export class ListeGestionPersonnelComponent implements OnInit {

//   @Input() listePersonnel!: personnelModel[];
//  @Input() person!: personnelModel

users!: UserGet[];
userpost =new UserDtoPost()




  constructor(private service : Services, private route :Router) {}

  ngOnInit(): void { 
  
  // this.listePersonnel = this.service.getlistePersonnel();  

this.userpost.assignation="ROLE_INFIRMIER";
this.userpost.email="AMAL2233@gmail.com";
this.userpost.firstName="amal";
this.userpost.lastName="amal";
this.userpost.password="123";

console.log(this.userpost)


// this.service.postUser(this.userpost).subscribe(data=>console.log(data),error=>console.log(error));


this.service.getUsers().subscribe(data=>{
this.users=data;
console.log(data)});

     
  }

//   getlistePersonnel() : personnelModel[] {
//     return listePersonnel;
// }

modifier(id:number) {
  this.service.post=this.users;
  this.route.navigateByUrl('modifier_personnel/'+id)
    
  
  
}




}