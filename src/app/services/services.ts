import { Injectable } from "@angular/core";
import {UserGet} from "../models/personnel.model";
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


private baseUrl = "http://localhost:8080/api/save";
private getUrl = "http://localhost:8080/api/users";
private baseUrlmodify= "http://localhost:8080/api/modifyUserInfo";

constructor(private http: HttpClient) { }
postUser(user:UserGet):Observable<UserGet> {
return this.http.post<UserGet>(this.baseUrl,user);
}
modifyUser(user:UserGet):Observable<UserGet>{
  return this.http.post<UserGet>(this.baseUrlmodify,user);
}



getUsers(): Observable<UserGet[]>{
  return this.http.get<UserGet[]>(this.getUrl);

  
}

}


  
