import { patientModel } from "./patient.model"
import { RoomModel } from "./room.model"

export class BedModel {
    id!:Number
    status!:string
    chambre!:RoomModel
    patient!:patientModel
}