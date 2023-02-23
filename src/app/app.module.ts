import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { AccueilSecretaireComponent } from './accueil-secretaire/accueil-secretaire.component';
import { AccueilInfirmiersComponent } from './accueil-infirmiers/accueil-infirmiers.component';
import { LoginComponent } from './login/login.component';
import { GestionLitsComponent } from './gestion-lits/gestion-lits.component';
import { GestionPersonnelComponent } from './gestion-personnel/gestion-personnel.component';
import { ListeGestionPersonnelComponent } from './liste-gestion-personnel/liste-gestion-personnel.component';
import { FichePatientFormComponent } from './fiche-patient-form/fiche-patient-form.component';
import { SuiviPatientFormComponent } from './suivi-patient-form/suivi-patient-form.component';
import { SuiviPatientComponent } from './suivi-patient/suivi-patient.component';
import { FichePatientComponent } from './fiche-patient/fiche-patient.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilAdminComponent,
    AccueilSecretaireComponent,
    AccueilInfirmiersComponent,
    LoginComponent,
    GestionLitsComponent,
    FichePatientComponent,
    SuiviPatientComponent,
    GestionPersonnelComponent,
    ListeGestionPersonnelComponent,
    FichePatientFormComponent,
    SuiviPatientFormComponent,
    SuiviPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
