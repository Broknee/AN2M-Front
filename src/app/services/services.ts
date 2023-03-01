import { Injectable } from "@angular/core";
import {UserDtoPost, UserGet} from "../models/personnel.model";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable ({
    providedIn:'root'

})

export class Services {

  private user$ = new BehaviorSubject<any>({});
  selectedUser$ = this.user$.asObservable();

  post !: UserGet[]

  setUser(user: any) {
    this.user$.next(user);
  }

  getlistePersonnelbyId(id:Number) :UserGet {
  let personnelId!:UserGet
    
    // for(let i=0;i<this.post.length;i++){
    //   if(this.post[i].id == id) {
    //     personnelId = this.post[i];
    //     console.log(this.post[i])
    //   }
      
    // }
      return personnelId;
    }



//     getlistePatient() : patientModel[] {
//       return listePatient;
// }

// getlistePatientbyId(id:Number) :patientModel {
//   let patientId!:patientModel

//   for(let i=0;i<listePatient.length;i++){
//     if(listePatient[i].id == id) {
//       patientId = listePatient[i];
//     }
    
//   }
//     return patientId;
// }


private baseUrlpost = "http://localhost:8080/api/save";
private getUrl = "http://localhost:8080/api/users";
private baseUrlmodify= "http://localhost:8080/api/modifyUserInfo";

constructor(private http: HttpClient) { }
postUser(user:UserDtoPost):Observable<UserDtoPost> {
return this.http.post<UserDtoPost>(this.baseUrlpost,user);
}
modifyUser(user:UserGet):Observable<UserGet>{
  return this.http.post<UserGet>(this.baseUrlmodify,user);
}



getUsers(): Observable<UserGet[]>{
  return this.http.get<UserGet[]>(this.getUrl);

  
}

}

    export const listePatients = 
    [
      {
        id : 1,
        nom : "Masset",
        prenom : "Marina",
        adresse : "14, rue des Lilas 59000 Lille",
        secu: "0389328459128",
        tel:"0600000000",
        mail : "massetmaria@gmail.com",
        dateEntree : 24/2/2023,
        dateSortie : 1/4/2023,
        
        nomUrgence: "Fournier",
        prenomUrgence:"Marie-Thérèse",
        raisonSejour:"fracture",
        telephoneUrgence:"0700000000"
      },

      {
        id : 2,
        nom : "V",
        prenom : "V",
        adresse : "14, rue des Lilas 59000 Lille",
        secu: "0389328459129",
        tel:"0600000009",
        mail : "massetmarina@gmail.com",
        dateEntree : 24/2/2023,
        dateSortie : 1/4/2023,
        
        nomUrgence: "Fournier",
        prenomUrgence:"Marie-Paule",
        raisonSejour:"fracture",
        telephoneUrgence:"0700000000"
      }
    ]

  
