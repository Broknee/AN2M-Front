import { Injectable } from "@angular/core";
import {UserDtoPost, UserGet} from "../models/personnel.model";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
// import { BedModel } from "../models/bed.model";
import { RoomModel } from "../models/room.model";
import { patientModel } from "../models/patient.model";
import { listSuiviModel, SuiviModel } from "../models/suivi.model";
import { BedModel } from "../models/bed.model";



@Injectable ({
    providedIn:'root'

})

export class Services {

  private user$ = new BehaviorSubject<any>({});
  selectedUser$ = this.user$.asObservable();

  private patient$ = new BehaviorSubject<any>({});
  selectedPatient$ = this.patient$.asObservable();


private suivi$ =  new BehaviorSubject<any>({});
selectedSuivi$ = this.suivi$.asObservable();

// private comSuivi$ =  new BehaviorSubject<any>({});
// selectedComSuivi$ = this.comSuivi$.asObservable();




  post !: UserGet[]
  get !:patientModel[]
  suivi!:SuiviModel[]


  // setComSuivi(suivi:any){
  //   this.comSuivi$.next(suivi);
  // }


  setSuivi(suivi:any){
    this.suivi$.next(suivi);
  }


  setUser(user: any) {
    this.user$.next(user);
  }

  setFichePatient(patient: any) {
    this.patient$.next(patient);
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

// getCommentsListById(id:Number) : SuiviModel[] {
//   let commentsListById:SuiviModel[] = [];
//   for (let i = 0; i < commentsList.length; i++) {
//     if (commentsList[i].patientid == id) {
//       commentsListById.push(commentsList[i]);
//     }
//   }
//   return commentsListById;
// }

// getlistePatientbyId(id:Number) :patientModel {
//   let patientId!:patientModel

//   for(let i=0;i<listePatients.length;i++){
//     if(listePatients[i].id == id) {
//       patientId = listePatients[i];
//     }
    
//   }
//     return patientId;
// }


private baseUrlpost = "http://localhost:8081/api/save";
private getUrl = "http://localhost:8081/api/users";
private baseUrlmodify= "http://localhost:8081/api/modifyUserInfo";
private baseUrl = "http://localhost:8081/api/";
private urlSuivi = "http://localhost:8081/api/suiviPatient";
 

constructor(private http: HttpClient) { }
postUser(user:UserDtoPost):Observable<UserDtoPost> {
return this.http.post<UserDtoPost>(this.baseUrlpost,user);
}
modifyUser(user:UserGet):Observable<UserGet>{
  return this.http.post<UserGet>(this.baseUrlmodify,user);
}

modifyPatient(patient:patientModel):Observable<patientModel>{
  return this.http.post<patientModel>(this.baseUrl + 'addPatient',patient);
}

getUsers(): Observable<UserGet[]>{
  return this.http.get<UserGet[]>(this.getUrl);  
}

getSuivi(id:Number): Observable<listSuiviModel[]>{
  return this.http.get<listSuiviModel[]>(this.baseUrl+'Suivi_patient/' + id);  
}


addComSuivi(suivi:SuiviModel):Observable<SuiviModel>{
  return this.http.post<SuiviModel>(this.urlSuivi,suivi)
}

addPatient(patient:patientModel):Observable<patientModel>{
  return this.http.post<patientModel>(this.baseUrl +'addPatient',patient)
}

getPatients():Observable<patientModel[]>{
  return this.http.get<patientModel[]>(this.baseUrl+'ListPatient')
}
getBedsList():Observable<BedModel[]>{
  return this.http.get<BedModel[]>(this.baseUrl+'ListLits')
}

// Gestion des lits
// getRoomsList() : RoomModel[] {
//   return roomsList;
// }

// getBedsList() : BedModel[] {
//   return bedsList;
// }

}

//     export const listePatients : patientModel []= 
//     [
//       {
//         id : 1,
//         nom : "Masset",
//         prenom : "Marina",
//         secu: "0389328459128",
//         adresse : "14, rue des Lilas 59000 Lille",
//         tel:"0600000000",
//         mail : "massetmaria@gmail.com",
//         date_entree : "24/2/2023",
//         date_sortie : "1/4/2023",
//         nom_urgent: "Fournier",
//         prenom_urgent:"Marie-Thérèse",
//         tel_urgent:"0700000000",
//         raison_sejour:"fracture"
//       },

//       {
//         id : 2,
//         nom : "V",
//         prenom : "V",
//         secu: "0389328459129",
//         adresse : "14, rue des Lilas 59000 Lille",
//         tel:"0600000009",
//         mail : "massetmarina@gmail.com",
//         date_entree : "24/2/2023",
//         date_sortie : "1/4/2023",
//         nom_urgent: "Fournier",
//         prenom_urgent:"Marie-Paule",
//         tel_urgent:"0700000000",
//         raison_sejour:"fracture"
//       }
//     ]



// //     export const listePatient  =
// // [
// //     {  
       
// //         id:1,
// //         nom : "Durant",
// //         prenom : "Philippe",
// //         secu : "1294837890678",
// //         adresse: "34, rue des lilas, 59000 Lille",
// //         tel : "0600000002",
// //         raison : "fracture à la jambe",
// //         lit:1,
// //         chambre:123,
// //         // arrivee:new Date(),
// //         // depart:new Date('2023-02-10'),
// //         arrivee: "2023-02-03",
// //         depart:"2023-02-10",
// //         nom_urgence : "Durant",
// //         prenom_urgence : "Elise",
// //         tel_urgence : "0700000011"
        
// //       },

// //       {  
       
// //         id:2,
// //         nom : "Masset",
// //         prenom : "Marina",
// //         secu : "1294837890679",
// //         adresse: "38, avenue du Général, 59000 Lille",
// //         tel : "0600000001",
// //         raison : "opération du coeur",
// //         lit:1,
// //         chambre:123,
// //         // arrivee:new Date('2023-02-01'),
// //         // depart:new Date('2023-02-10'),
// //         arrivee:'2023-02-01',
// //         depart:'2023-02-10',
// //         nom_urgence : "Masset",
// //         prenom_urgence : "Do",
// //         tel_urgence : "0700000009"
        
// //       },

// //       {  
       
// //         id:3,
// //         nom : "Doe",
// //         prenom : "John",
// //         secu : "1294837890680",
// //         adresse : "56, rue Lafayette, 59000 Lille",
// //         tel : "0600000000",
// //         raison : "tendinite à l'épaule",
// //         lit:1,
// //         chambre:123,
// //         // arrivee:new Date('2023-02-01'),
// //         // depart:new Date('2023-02-10'),
// //         arrivee:'2023-02-01',
// //         depart:'2023-02-10',
// //         nom_urgence : "Doe",
// //         prenom_urgence : "Jessie",
// //         tel_urgence : "0700000010"
        
// //       }
      
    
// //     ]

//     export const roomsList : RoomModel[] =
//     [
//       {
//         id:301
//       },
//       {
//         id:302
//       },
//       {
//         id:303
//       },
//       {
//         id:304
//       },
//       {
//         id:305
//       },
//       {
//         id:306
//       }
//     ]

// //     export const commentsList : SuiviModel[] =
// //     [
// //         {  
           
// //             id:1,
// //             comment : "Piqûre à 8h, chambre 301, le patient a fait une réaction allergique au produit injecté, changement de traitement.",
// //             user_id : 1,
// //             patient_id : 1,
// //             date:"2023-02-10"
// //           },
    
// //           {  
           
// //             id:2,
// //             comment : "Piqûre à 8h, chambre 301, le patient a fait une réaction allergique au produit injecté, changement de traitement.",
// //             user_id : 4,
// //             patient_id : 2,
// //             date:"2023-02-11"
// //           },
    
// //           {  
           
// //             id:3,
// //             comment : "Piqûre à 10h",
// //             user_id : 4,
// //             patient_id : 2,
// //             date:"2023-02-11"
// //           },
    
// //           {  
           
// //             id:4,
// //             comment : "Piqûre à 11h",
// //             user_id : 1,
// //             patient_id : 2,
// //             date:"2023-02-12"
// //           },
    
// //           {  
           
// //             id:4,
// //             comment : "Piqûre à 12h",
// //             user_id : 4,
// //             patient_id : 2,
// //             date:"2023-02-12"
// //           },
          
        
// //         ]

// //     export const bedsList : BedModel[] =
// // [
// //   {
// //     id:1,
// //     status:"occupé",
// //     room_id:301,
// //     patient_id:1
// //   },
// //   {
// //     id:2,
// //     status:"libre",
// //     room_id:301,
// //     patient_id:0
// //   },
// //   {
// //     id:3,
// //     status:"libre",
// //     room_id:301,
// //     patient_id:0
// //   },

// //   {
// //     id:4,
// //     status:"libre",
// //     room_id:302,
// //     patient_id:0
// //   },

// //   {
// //     id:5,
// //     status:"libre",
// //     room_id:302,
// //     patient_id:0
// //   },

// //   {
// //     id:6,
// //     status:"libre",
// //     room_id:302,
// //     patient_id:0
// //   },


// //   {
// //     id:7,
// //     status:"libre",
// //     room_id:303,
// //     patient_id:0
// //   },

// //   {
// //     id:8,
// //     status:"libre",
// //     room_id:303,
// //     patient_id:0
// //   }, 
  
// //   {
// //     id:9,
// //     status:"libre",
// //     room_id:303,
// //     patient_id:0
// //   }, 
  
// //   {
// //     id:10,
// //     status:"libre",
// //     room_id:304,
// //     patient_id:0
// //   }, 
  
// //   {
// //     id:11,
// //     status:"libre",
// //     room_id:304,
// //     patient_id:0
// //   }, 
  
// //   {
// //     id:12,
// //     status:"libre",
// //     room_id:304,
// //     patient_id:0
// //   }, 
  
// //   {
// //     id:13,
// //     status:"libre",
// //     room_id:305,
// //     patient_id:0
// //   }, 
  
// //   {
// //     id:14,
// //     status:"libre",
// //     room_id:305,
// //     patient_id:0
// //   }, 
  
// //   {
// //     id:15,
// //     status:"libre",
// //     room_id:305,
// //     patient_id:0
// //   },

// //   {
// //     id:16,
// //     status:"libre",
// //     room_id:306,
// //     patient_id:0
// //   }, 
  
// //   {
// //     id:17,
// //     status:"libre",
// //     room_id:306,
// //     patient_id:0
// //   }, 
  
// //   {
// //     id:18,
// //     status:"occupé",
// //     room_id:306,
// //     patient_id:2
// //   }

// // ]
