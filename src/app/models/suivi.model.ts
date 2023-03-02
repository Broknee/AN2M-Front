import { patientModel } from "./patient.model"
import { personnelModel } from "./personnel.model"

export class SuiviModel {
    id!:number
    com!:string
    usersid!:number
    patientid!:number
    // date!:string
}



export class listSuiviModel {
    id!:number
    com!:string
    user!:personnelModel
    patient!:patientModel
}