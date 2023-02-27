export class personnelModel {
    id!:Number
    nom!:String
    prenom!:String
    mail!:String
    username!:String
    mdp!:String
    role!:String
}


export class UserGet {
    id! : number;
    firstName!: string;
    lastName!: string;
    email!: string;
    roles!:string[] 
}

export class UserDtoPost {
    id! : number;
    firstName!: string;
    lastName!: string;
    email!: string;
    password!:string
    assignation!:string
  
}