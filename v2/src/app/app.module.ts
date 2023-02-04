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
import { SingleFicheComponent } from './single-fiche/single-fiche.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { FicheCreateComponent } from './fiche-create/fiche-create.component';

@NgModule({
  declarations: [
    AppComponent,
    FicheComponent,
    AccueilComponent,
    FicheListComponent,
    FicheCreateComponent,
    HeaderComponent,
    SingleFicheComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
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
