import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FicheCreateComponent } from './fiche-create/fiche-create.component';
import { FicheListComponent } from './fiche-list/fiche-list.component';
import { SignupComponent } from './signup/signup.component';
import { SingleFicheComponent } from './single-fiche/single-fiche.component';

const routes: Routes = [
  { path : 'fiches', component : FicheListComponent },
  { path : '', component : AccueilComponent},
  { path : 'fiches/:id', component: SingleFicheComponent},
  { path : "signup", component: SignupComponent},
  { path : 'fiches/create/:type', component: FicheCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
