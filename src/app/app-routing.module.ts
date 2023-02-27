import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { AccueilInfirmiersComponent } from './accueil-infirmiers/accueil-infirmiers.component';
import { AccueilSecretaireComponent } from './accueil-secretaire/accueil-secretaire.component';
import { AjoutPersonnelComponent } from './ajout-personnel/ajout-personnel.component';
import { FichePatientComponent } from './fiche-patient/fiche-patient.component';
import { ListeGestionPersonnelComponent } from './liste-gestion-personnel/liste-gestion-personnel.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { LoginComponent } from './login/login.component';
import { ModifierPersonnelComponent } from './modifier-personnel/modifier-personnel.component';
import { SuiviPatientComponent } from './suivi-patient/suivi-patient.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'accueil_admin', component: AccueilAdminComponent },
  { path: 'gestion_personnel', component: ListeGestionPersonnelComponent },
  { path: 'accueil_infirmiers', component: AccueilInfirmiersComponent },
  { path: 'accueil_secretaire', component: AccueilSecretaireComponent },
  { path: 'modifier_personnel/:id', component: ModifierPersonnelComponent },
  { path: 'ajout_personnel', component: AjoutPersonnelComponent },
  { path: 'gestion_patient', component: ListePatientComponent },
  { path: 'fiche_patient/:id', component: FichePatientComponent},
  { path: 'suivi_patient/:id', component: SuiviPatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
