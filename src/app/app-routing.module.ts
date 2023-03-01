import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { AccueilInfirmiersComponent } from './accueil-infirmiers/accueil-infirmiers.component';
import { AccueilSecretaireComponent } from './accueil-secretaire/accueil-secretaire.component';
import { AjoutPersonnelComponent } from './ajout-personnel/ajout-personnel.component';
import { AjouterPatientComponent } from './ajouter-patient/ajouter-patient.component';
import { FichePatientComponent } from './fiche-patient/fiche-patient.component';
import { ListeGestionPersonnelComponent } from './liste-gestion-personnel/liste-gestion-personnel.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { LoginComponent } from './login/login.component';
import { ModifierPersonnelComponent } from './modifier-personnel/modifier-personnel.component';
import { SuiviPatientComponent } from './suivi-patient/suivi-patient.component';
import { GestionLitsComponent } from './gestion-lits/gestion-lits.component';


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
  { path: 'suivi_patient/:id', component: SuiviPatientComponent},
  {path: 'ajout_patient', component:AjouterPatientComponent}
  { path: 'gestion_lits', component: GestionLitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
