import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { AccueilInfirmiersComponent } from './accueil-infirmiers/accueil-infirmiers.component';
import { AccueilSecretaireComponent } from './accueil-secretaire/accueil-secretaire.component';
import { HeaderComponent } from './header/header.component';
import { ListeGestionPersonnelComponent } from './liste-gestion-personnel/liste-gestion-personnel.component';
import { LoginComponent } from './login/login.component';
import { ModifierPersonnelComponent } from './modifier-personnel/modifier-personnel.component';

const routes: Routes = [
{path:'',component:HeaderComponent},
{path:'',component:LoginComponent},
{path:'login',component:LoginComponent},
{path:'accueil_admin',component:AccueilAdminComponent},
{path:'gestion_personnel',component:ListeGestionPersonnelComponent},
{path:'accueil_infirmiers',component:AccueilInfirmiersComponent},
{path:'accueil_secretaire',component:AccueilSecretaireComponent},
{path:'modifier_personnel',component:ModifierPersonnelComponent}]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
