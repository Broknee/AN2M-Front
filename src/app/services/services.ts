import { Injectable } from "@angular/core";
import {UserDtoPost, UserGet} from "../models/personnel.model";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { BedModel } from "../models/bed.model";
import { RoomModel } from "../models/room.model";
import { patientModel } from "../models/patient.model";



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



    getlistePatient() : patientModel[] {
      return listePatient;
}

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

// Gestion des lits
getRoomsList() : RoomModel[] {
  return roomsList;
}

getBedsList() : BedModel[] {
  return bedsList;
}

}

export const listePersonnel  =
[
    {  
       
        id:1,
        nom : "Doe",
        prenom : "John",
        mail : "doejohn@gmail.com",
        username: "JohnDoe",
        mdp:"123",
        role:"infirmier"
       
        
      },

      
      {  
       
        id:2,
        nom : "Diallo",
        prenom : "Mamadou",
        mail : "diallomamadou@gmail.com",
        username: "Mamadou",
        mdp:"123",
        role:"admin"
        
      },

      {  
       
        id:3,
        nom : "Masset",
        prenom : "Marina",
        mail : "massetmaria@gmail.com",
        username:"Marina",
        mdp:"123",
        role:"secrétaire"
        
      },
      
      {  
       
        id:4,
        nom : "Fournier",
        prenom : "Marie",
        mail : "fourniermarie@gmail.com",
        username: "Marie",
        mdp:"123",
        role:"infirmier"
      
      }
    ]



    export const listePatient  =
[
    {  
       
        id:1,
        nom : "Durant",
        prenom : "Philippe",
        secu : "1294837890678",
        adresse: "34, rue des lilas, 59000 Lille",
        tel : "0600000002",
        raison : "fracture à la jambe",
        lit:1,
        chambre:123,
        // arrivee:new Date(),
        // depart:new Date('2023-02-10'),
        arrivee: "2023-02-03",
        depart:"2023-02-10",
        nom_urgence : "Durant",
        prenom_urgence : "Elise",
        tel_urgence : "0700000011"
        
      },

      {  
       
        id:2,
        nom : "Masset",
        prenom : "Marina",
        secu : "1294837890679",
        adresse: "38, avenue du Général, 59000 Lille",
        tel : "0600000001",
        raison : "opération du coeur",
        lit:1,
        chambre:123,
        // arrivee:new Date('2023-02-01'),
        // depart:new Date('2023-02-10'),
        arrivee:'2023-02-01',
        depart:'2023-02-10',
        nom_urgence : "Masset",
        prenom_urgence : "Do",
        tel_urgence : "0700000009"
        
      },

      {  
       
        id:3,
        nom : "Doe",
        prenom : "John",
        secu : "1294837890680",
        adresse : "56, rue Lafayette, 59000 Lille",
        tel : "0600000000",
        raison : "tendinite à l'épaule",
        lit:1,
        chambre:123,
        // arrivee:new Date('2023-02-01'),
        // depart:new Date('2023-02-10'),
        arrivee:'2023-02-01',
        depart:'2023-02-10',
        nom_urgence : "Doe",
        prenom_urgence : "Jessie",
        tel_urgence : "0700000010"
        
      }
      
    
    ]

    export const roomsList : RoomModel[] =
    [
      {
        id:301
      },
      {
        id:302
      },
      {
        id:303
      },
      {
        id:304
      },
      {
        id:305
      },
      {
        id:306
      }
    ]

    export const bedsList : BedModel[] =
[
  {
    id:1,
    status:"occupé",
    room_id:301,
    patient_id:1
  },
  {
    id:2,
    status:"libre",
    room_id:301,
    patient_id:0
  },
  {
    id:3,
    status:"libre",
    room_id:301,
    patient_id:0
  },

  {
    id:4,
    status:"libre",
    room_id:302,
    patient_id:0
  },

  {
    id:5,
    status:"libre",
    room_id:302,
    patient_id:0
  },

  {
    id:6,
    status:"libre",
    room_id:302,
    patient_id:0
  },


  {
    id:7,
    status:"libre",
    room_id:303,
    patient_id:0
  },

  {
    id:8,
    status:"libre",
    room_id:303,
    patient_id:0
  }, 
  
  {
    id:9,
    status:"libre",
    room_id:303,
    patient_id:0
  }, 
  
  {
    id:10,
    status:"libre",
    room_id:304,
    patient_id:0
  }, 
  
  {
    id:11,
    status:"libre",
    room_id:304,
    patient_id:0
  }, 
  
  {
    id:12,
    status:"libre",
    room_id:304,
    patient_id:0
  }, 
  
  {
    id:13,
    status:"libre",
    room_id:305,
    patient_id:0
  }, 
  
  {
    id:14,
    status:"libre",
    room_id:305,
    patient_id:0
  }, 
  
  {
    id:15,
    status:"libre",
    room_id:305,
    patient_id:0
  },

  {
    id:16,
    status:"libre",
    room_id:306,
    patient_id:0
  }, 
  
  {
    id:17,
    status:"libre",
    room_id:306,
    patient_id:0
  }, 
  
  {
    id:18,
    status:"occupé",
    room_id:306,
    patient_id:2
  }

]
