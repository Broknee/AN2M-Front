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
        
      }
    ]


  
