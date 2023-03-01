import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { AccueilSecretaireComponent } from './accueil-secretaire/accueil-secretaire.component';
import { AccueilInfirmiersComponent } from './accueil-infirmiers/accueil-infirmiers.component';
import { LoginComponent } from './login/login.component';
import { GestionLitsComponent } from './gestion-lits/gestion-lits.component';
import { ListeGestionPersonnelComponent } from './liste-gestion-personnel/liste-gestion-personnel.component';
import { SuiviPatientFormComponent } from './suivi-patient-form/suivi-patient-form.component';
import { SuiviPatientComponent } from './suivi-patient/suivi-patient.component';
import { ModifierPersonnelComponent } from './modifier-personnel/modifier-personnel.component';
import { HeaderComponent } from './header/header.component';
import { AjoutPersonnelComponent } from './ajout-personnel/ajout-personnel.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { FichePatientComponent } from './fiche-patient/fiche-patient.component';
import { AjouterPatientComponent } from './ajouter-patient/ajouter-patient.component';
import { ModifierPatientComponent } from './modifier-patient/modifier-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilAdminComponent,
    AccueilSecretaireComponent,
    AccueilInfirmiersComponent,
    LoginComponent,
    GestionLitsComponent,
    SuiviPatientComponent,
    ListeGestionPersonnelComponent,
    SuiviPatientFormComponent,
    SuiviPatientComponent,
    ModifierPersonnelComponent,
    HeaderComponent,
    AjoutPersonnelComponent,
    ListePatientComponent,
    FichePatientComponent,
    AjouterPatientComponent,
    ModifierPatientComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
