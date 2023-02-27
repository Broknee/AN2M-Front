import { Injectable } from "@angular/core";
import { patientModel } from "../models/patient.model";
import { personnelModel } from "../models/personnel.model";
import { SuiviModel } from "../models/suivi.model";



@Injectable ({
    providedIn:'root'

})

export class Services {
 

    getlistePersonnel() : personnelModel[] {
            return listePersonnel;
    }

    getlistePersonnelbyId(id:Number) :personnelModel {
        let personnelId!:personnelModel
 
        for(let i=0;i<listePersonnel.length;i++){
          if(listePersonnel[i].id == id) {
            personnelId = listePersonnel[i];
          }
          
        }
          return personnelId;
    }



    getlistePatient() : patientModel[] {
      return listePatient;
}


  getCommentsList() : SuiviModel [] {
    return commentsList;
  }


getCommentsListById(id:Number) : SuiviModel[] {
  let commentsListById:SuiviModel[] = [];
  for (let i = 0; i < commentsList.length; i++) {
    if (commentsList[i].patient_id == id) {
      commentsListById.push(commentsList[i]);
    }
  }
  return commentsListById;
}

getlistePatientbyId(id:Number) :patientModel {
  let patientId!:patientModel

  for(let i=0;i<listePatient.length;i++){
    if(listePatient[i].id == id) {
      patientId = listePatient[i];
    }
    
  }
    return patientId;
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
        nom : "Durand",
        prenom : "Philippe",
        secu : "1294837890678",
        adresse: "34, rue des lilas, 59000 Lille",
        tel : "0600000002",
        raison : "fracture à la jambe",
        lit:1,
        chambre:123,
        arrivee:"2023.02.01",
        depart:"2023.02.10",
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
        arrivee:"2023.02.01",
        depart:"2023.02.10",
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
        arrivee:"2023.02.01",
        depart:"2023.02.10",
        nom_urgence : "Doe",
        prenom_urgence : "Jessie",
        tel_urgence : "0700000010"
        
      }
      
    
    ]

    export const commentsList : SuiviModel[] =
[
    {  
       
        id:1,
        comment : "Piqûre à 8h",
        user_id : 1,
        patient_id : 1
      },

      {  
       
        id:2,
        comment : "Piqûre à 9h",
        user_id : 4,
        patient_id : 2
      },

      {  
       
        id:3,
        comment : "Piqûre à 10h",
        user_id : 4,
        patient_id : 2
      },

      {  
       
        id:4,
        comment : "Piqûre à 11h",
        user_id : 1,
        patient_id : 2
      },

      {  
       
        id:4,
        comment : "Piqûre à 12h",
        user_id : 4,
        patient_id : 2
      },
      
    
    ]


  


  
