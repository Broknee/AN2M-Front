import { Injectable } from "@angular/core";
import {UserGet, UserDtoPost } from "../models/personnel.model";
import { SuiviModel } from "../models/suivi.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable ({
    providedIn:'root'

})

export class Services {


  post !: UserGet[]

  getlistePersonnelbyId(id:Number) :UserGet {
  let personnelId!:UserGet
    
    for(let i=0;i<this.post.length;i++){
      if(this.post[i].id == id) {
        personnelId = this.post[i];
        console.log(this.post[i])
      }
      
    }
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


private baseUrl = "http://localhost:8080/api/save";
private getUrl = "http://localhost:8080/api/users";

constructor(private http: HttpClient) { }
postUser(user:UserDtoPost):Observable<UserDtoPost> {
return this.http.post<UserDtoPost>(this.baseUrl,user);
}
getUsers(): Observable<UserGet[]>{
  return this.http.get<UserGet[]>(this.getUrl);

  
}









}


// export const listePersonnel  =
// [
//     {  
       
//         id:1,
//         nom : "Doe",
//         prenom : "John",
//         mail : "doejohn@gmail.com",
//         username: "JohnDoe",
//         mdp:"123",
//         role:"infirmier"
       
        
//       },
      
//       {  
       
//         id:2,
//         nom : "Diallo",
//         prenom : "Mamadou",
//         mail : "diallomamadou@gmail.com",
//         username: "Mamadou",
//         mdp:"123",
//         role:"admin"
        
//       },

//       {  
       
//         id:3,
//         nom : "Masset",
//         prenom : "Marina",
//         mail : "massetmaria@gmail.com",
//         username:"Marina",
//         mdp:"123",
//         role:"secrétaire"
        
//       }
//     ]



//     export const listePatient  =
// [
//     {  
       
//         id:1,
//         nom : "Doe",
//         prenom : "John",
//         lit:1,
//         chambre:123,
//         arrivee:"2023.02.01",
//         depart:"2023.02.10",
        
//       },

//       {  
       
//         id:2,
//         nom : "Masset",
//         prenom : "Marina",
//         lit:1,
//         chambre:123,
//         arrivee:"2023.02.01",
//         depart:"2023.02.10",
        
//       },

//       {  
       
//         id:3,
//         nom : "Doe",
//         prenom : "John",
//         lit:1,
//         chambre:123,
//         arrivee:"2023.02.01",
//         depart:"2023.02.10",
        
//       }
      
    
//     ]

//     export const commentsList : SuiviModel[] =
// [
//     {  
       
//         id:1,
//         comment : "Piqûre à 8h",
//         user_id : 1,
//         patient_id : 1
//       },

//       {  
       
//         id:2,
//         comment : "Piqûre à 9h",
//         user_id : 4,
//         patient_id : 2
//       },

//       {  
       
//         id:3,
//         comment : "Piqûre à 10h",
//         user_id : 4,
//         patient_id : 2
//       },

//       {  
       
//         id:4,
//         comment : "Piqûre à 11h",
//         user_id : 1,
//         patient_id : 2
//       },

//       {  
       
//         id:4,
//         comment : "Piqûre à 12h",
//         user_id : 4,
//         patient_id : 2
//       },
      
    
//    ]


  


  
