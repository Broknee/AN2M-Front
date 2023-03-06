import { Injectable } from "@angular/core";
import {UserDtoPost, UserGet} from "../models/personnel.model";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
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






  post !: UserGet[]
  get !:patientModel[]
  suivi!:SuiviModel[]





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
    
      return personnelId;
    }




private baseUrlpost = "http://localhost:8080/api/save";
private getUrl = "http://localhost:8080/api/users";
private baseUrlmodify= "http://localhost:8080/api/modifyUserInfo";
private baseUrl = "http://localhost:8080/api/";
private urlSuivi = "http://localhost:8080/api/suiviPatient";
private urlSupp = "http://localhost:8080/api/delete_user/"
 

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

suppUsers(id:number): Observable<UserGet[]>{
  return this.http.get<UserGet[]>(this.urlSupp+id);  
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
}






          
