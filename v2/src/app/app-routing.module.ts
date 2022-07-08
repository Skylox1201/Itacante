import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FicheByTypeComponent } from './fiche-by-type/fiche-by-type.component';
import { FicheListComponent } from './fiche-list/fiche-list.component';
import { SingleFicheComponent } from './single-fiche/single-fiche.component';

const routes: Routes = [
  { path : 'fiches', component : FicheListComponent },
  { path : '', component : AccueilComponent},
  { path : 'fiches/type/:type', component: FicheByTypeComponent},
  { path : 'fiches/:id', component: SingleFicheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
