import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fiche-create',
  templateUrl: './fiche-create.component.html',
  styleUrls: ['./fiche-create.component.scss'],
})
export class FicheCreateComponent implements OnInit {

  ficheForm!: FormGroup;
  traitForm!: FormGroup;
  potionForm!:FormGroup;
  inventaireForm!:FormGroup;
  specialForm!:FormGroup;
  sortForm!:FormGroup;

  imageUrl!: string;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
    }

  ngOnInit(): void {
    this.ficheForm = this.formBuilder.group({
      type: [this.route.snapshot.params['type']],
      name: [null],
      taille: [""],
      exp: [0],

      locationMezoide: [false],
      locationRocheuses: [false],
      locationTagata: [false],
      locationOland: [false],
      locationIles: [false],
      locationBlue: [false],
      locationDesert: [false],
      locationParadis: [false],
      locationEnfer: [false],
      locationLife: [false],
      locationDeath: [false],
      locationArchaia: [false],

      pv: [null],
      mana: [null],
      force: [null],
      dexterite: [null],
      constitution: [null],
      intelligence: [null],
      sagesse: [null],
      charisme: [null],
      description: [null],
      imageUrl: [null],

      competenceAcrobatie: [-4],
      competenceArcane: [-4],
      competenceAthletisme: [-4],
      competenceDiscretion: [-4],
      competenceDressage: [-4],
      competenceEscamotage: [-4],
      competenceHistoire: [-4],
      competenceIntimidation: [-4],
      competenceIntuition: [-4],
      competenceInvestigation: [-4],
      competenceMaitriseArcanes: [-4],
      competenceMedecine: [-4],
      competenceMystere: [-4],
      competenceNature: [-4],
      competencePerception: [-4],
      competencePersuasion: [-4],
      competenceReligion: [-4],
      competenceRepresentation: [-4],
      competenceSurvie: [-4],
      competenceTromperie: [-4],

      arme1_nom: [null],
      arme1_type: [null],
      arme1_degat: [null],
      arme1_parade: [0],
      arme1_portee: [null],
      arme1_rupture: [null],
      arme1_bonusMalus: [null],

      arme2_nom: [null],
      arme2_type: [null],
      arme2_degat: [null],
      arme2_parade: [0],
      arme2_portee: [null],
      arme2_rupture: [null],
      arme2_bonusMalus: [null],

      arme3_nom: [null],
      arme3_type: [null],
      arme3_degat: [null],
      arme3_parade: [0],
      arme3_portee: [null],
      arme3_rupture: [null],
      arme3_bonusMalus: [null],

      arme4_nom: [null],
      arme4_type: [null],
      arme4_degat: [null],
      arme4_parade: [0],
      arme4_portee: [null],
      arme4_rupture: [null],
      arme4_bonusMalus: [null],

      bouclier_nom: [null],
      bouclier_type: [null],
      bouclier_parade: [0],
      bouclier_prPhy: [0],
      bouclier_prMag: [0],
      bouclier_rupture: [null],
      bouclier_bonusMalus: [null],

      armure_naturelle_prPhy: [0],
      armure_naturelle_prMag: [0],
      armure_naturelle_bonusMalus: [null],

      armure_tete_nom: [null],
      armure_tete_type: [null],
      armure_tete_prPhy: [0],
      armure_tete_prMag: [0],
      armure_tete_rupture: [null],
      armure_tete_bonusMalus: [null],

      armure_torse_nom: [null],
      armure_torse_type: [null],
      armure_torse_prPhy: [0],
      armure_torse_prMag: [0],
      armure_torse_rupture: [null],
      armure_torse_bonusMalus: [null],

      armure_bras_nom: [null],
      armure_bras_type: [null],
      armure_bras_prPhy: [0],
      armure_bras_prMag: [0],
      armure_bras_rupture: [null],
      armure_bras_bonusMalus: [null],

      armure_jambes_nom: [null],
      armure_jambes_type: [null],
      armure_jambes_prPhy: [0],
      armure_jambes_prMag: [0],
      armure_jambes_rupture: [null],
      armure_jambes_bonusMalus: [null],

      objetMagique_anneauDroit_nom: [null],
      objetMagique_anneauDroit_effet: [null],

      objetMagique_anneauGauche_nom: [null],
      objetMagique_anneauGauche_effet: [null],

      objetMagique_collier_nom: [null],
      objetMagique_collier_effet: [null],

      bourse_po: [0],
      bourse_pa: [0],
      bourse_pb: [0]
    });

    this.traitForm = this.formBuilder.group({
      trait_nom: [null],
      trait_description: [null],
      trait_effet: [null]
    });

    this.potionForm = this.formBuilder.group({
      potion_nom: [null],
      potion_effet: [null],
      potion_dose: [0]
    });

    this.inventaireForm = this.formBuilder.group({
      inventaire_nom: [null],
      inventaire_description: [null],
      inventaire_occurence: [0]
    });

    this.specialForm = this.formBuilder.group({
      special_nom: [null],
      special_effet: [null],
    });

    this.sortForm = this.formBuilder.group({
      sort_nom: [null],
      sort_niveau: [0],
      sort_incantation: [null],
      sort_portee: [null],
      sort_cout: [null],
      sort_duree: [null],
      sort_aire_effet: [null],
      sort_formule: [null],
      sort_effet: [null],
      sort_critique: [null],
      sort_fumble: [null]
    });
  }

  onAddTrait(): void {
    console.log(this.traitForm.value);
  }

  onAddPotion(): void {
    console.log(this.potionForm.value);
  }

  onCreateFiche(): void {
    console.log(this.ficheForm.value);
  }

  onAddInventaire(): void {
    console.log(this.inventaireForm.value);
  }

  onAddSpecial(): void {
    console.log(this.specialForm.value);
  }

  onAddSort(): void {
    console.log(this.sortForm.value);
  }

  

  // Image Preview
  showPreview(event): void {
    const file = (event.target as HTMLInputElement).files[0];
    this.ficheForm.patchValue({
      imageUrl: file
    });
    this.ficheForm.get('imageUrl').updateValueAndValidity()
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    }
    reader.readAsDataURL(file)
  }
}
