import { Injectable } from "@angular/core";
import { patientModel } from "../models/patient.model";
import { personnelModel } from "../models/personnel.model";



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
        mdp:"123"
       
        
      },
      
      {  
       
        id:2,
        nom : "Diallo",
        prenom : "Mamadou",
        mail : "diallomamadou@gmail.com",
        mdp:"123"
        
      },

      {  
       
        id:3,
        nom : "Masset",
        prenom : "Marina",
        mail : "massetmaria@gmail.com",
        mdp:"123"
        
      }
    ]



    export const listePatient  =
[
    {  
       
        id:1,
        nom : "Doe",
        prenom : "John",
        lit:1,
        chambre:123,
        arrivee:"2023.02.01",
        depart:"2023.02.10",
        
      },

      {  
       
        id:1,
        nom : "Doe",
        prenom : "John",
        lit:1,
        chambre:123,
        arrivee:"2023.02.01",
        depart:"2023.02.10",
        
      },

      {  
       
        id:1,
        nom : "Doe",
        prenom : "John",
        lit:1,
        chambre:123,
        arrivee:"2023.02.01",
        depart:"2023.02.10",
        
      }
      
    
    ]


  


  
