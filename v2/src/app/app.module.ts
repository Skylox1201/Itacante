import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FicheComponent } from './fiche/fiche.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FicheListComponent } from './fiche-list/fiche-list.component';
import { HeaderComponent } from './header/header.component';
import { FicheByTypeComponent } from './fiche-by-type/fiche-by-type.component';
import { SingleFicheComponent } from './single-fiche/single-fiche.component';

@NgModule({
  declarations: [
    AppComponent,
    FicheComponent,
    AccueilComponent,
    FicheListComponent,
    HeaderComponent,
    FicheByTypeComponent,
    SingleFicheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide : LOCALE_ID, useValue : 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
