import { Injectable } from "@angular/core";
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

  
