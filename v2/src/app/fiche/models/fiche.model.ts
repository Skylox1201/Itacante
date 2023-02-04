import { SpecialPathVariables } from "mongoose";

export class Fiche {
    id!: number;
    type!: string;
    name!: string;
    taille!: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";
    exp!: number;

    locationMezoide!: boolean;
    locationRocheuses!: boolean;
    locationTagata!: boolean;
    locationOland!: boolean;
    locationIles!: boolean;
    locationBlue!: boolean;
    locationDesert!: boolean;
    locationParadis!: boolean;
    locationEnfer!: boolean;
    locationLife!: boolean;
    locationDeath!: boolean;
    locationArchaia!: boolean;

    pv!: number;
    mana!: number;
    force!: number;
    dexterite!: number;
    constitution!: number;
    intelligence!: number;
    sagesse!: number;
    charisme!: number;
    description!: string;
    imageUrl?: string;

    competenceAcrobatie?: number;
    competenceArcane?: number;
    competenceAthletisme?: number;
    competenceDiscretion?: number;
    competenceDressage?: number;
    competenceEscamotage?: number;
    competenceHistoire?: number;
    competenceIntimidation?: number;
    competenceIntuition?: number;
    competenceInvestigation?: number;
    competenceMaitriseArcanes?: number;
    competenceMedecine?: number;
    competenceMystere?: number;
    competenceNature?: number;
    competencePerception?: number;
    competencePersuasion?: number;
    competenceReligion?: number;
    competenceRepresentation?: number;
    competenceSurvie?: number;
    competenceTromperie?: number;

    trait?: Trait[];

    arme1_nom?: string;
    arme1_type?: "tranchant" | "contendant" | "percant" | "distance";
    arme1_degat?: string;
    arme1_parade?: number;
    arme1_portee?: string;
    arme1_rupture?: 4 |3 | 2 | 1 | 0 ;
    arme1_bonusMalus?: string;

    arme2_nom?: string;
    arme2_type?: "tranchant" | "contendant" | "percant" | "distance";
    arme2_degat?: string;
    arme2_parade?: number;
    arme2_portee?: string;
    arme2_rupture?: 4 |3 | 2 | 1 | 0 ;
    arme2_bonusMalus?: string;

    arme3_nom?: string;
    arme3_type?: "tranchant" | "contendant" | "percant" | "distance";
    arme3_degat?: string;
    arme3_parade?: number;
    arme3_portee?: string;
    arme3_rupture?: 4 |3 | 2 | 1 | 0 ;
    arme3_bonusMalus?: string;

    arme4_nom?: string;
    arme4_type?: "tranchant" | "contendant" | "percant" | "distance";
    arme4_degat?: string;
    arme4_parade?: number;
    arme4_portee?: string;
    arme4_rupture?: 4 | 3 | 2 | 1 | 0 ;
    arme4_bonusMalus?: string;

    bouclier_nom?: string;
    bouclier_type?: "leger" | "intermediaire" | "lourd";
    bouclier_parade?: number;
    bouclier_prPhy?: number;
    bouclier_prMag?: number;
    bouclier_rupture?: 4 |3 | 2 | 1 | 0 ;
    bouclier_bonusMalus?: string;

    armure_naturelle_prPhy?: number;
    armure_naturelle_prMag?: number;
    armure_naturelle_bonusMalus?: string;

    armure_tete_nom?: string;
    armure_tete_type?: "legere" | "intermediaire" | "lourde";
    armure_tete_prPhy?: number;
    armure_tete_prMag?: number;
    armure_tete_rupture?: 4 | 3 | 2 | 1 | 0 ;
    armure_tete_bonusMalus?: string;

    armure_torse_nom?: string;
    armure_torse_type?: "legere" | "intermediaire" | "lourde";
    armure_torse_prPhy?: number;
    armure_torse_prMag?: number;
    armure_torse_rupture?: 4 | 3 | 2 | 1 | 0 ;
    armure_torse_bonusMalus?: string;

    armure_bras_nom?: string;
    armure_bras_type?: "legere" | "intermediaire" | "lourde";
    armure_bras_prPhy?: number;
    armure_bras_prMag?: number;
    armure_bras_rupture?: 4 | 3 | 2 | 1 | 0 ;
    armure_bras_bonusMalus?: string;

    armure_jambes_nom?: string;
    armure_jambes_type?: "legere" | "intermediaire" | "lourde";
    armure_jambes_prPhy?: number;
    armure_jambes_prMag?: number;
    armure_jambes_rupture?: 4 | 3 | 2 | 1 | 0 ;
    armure_jambes_bonusMalus?: string;

    objetMagique_anneauDroit_nom?: string;
    objetMagique_anneauDroit_effet?: string;

    objetMagique_anneauGauche_nom?: string;
    objetMagique_anneauGauche_effet?: string;

    objetMagique_collier_nom?: string;
    objetMagique_collier_effet?: string;

    potion?: Potion[];

    bourse_po?: number;
    bourse_pa?: number;
    bourse_pb?: number;

    special?: Special[];

    sort?: Sort[];
}

export class Trait {
    id!: number;
    nom!: string;
    effet!: string;
    bonusMalus!: string;
}

export class Potion {
    id!: number;
    nom!: string;
    effet!: string;
    dose!: number;
}

export class Special {
    id!: number;
    nom!: string;
    effet!: string;
    dose!: number;
}

export class Sort {
    id!: number;
    nom!: string;
    niveau!: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 ;
    incantation?: string;
    portee?: string
    cout?: string
    duree?: string
    aireEffet?: string
    formule?: string
    effet!: string
    critique?: string
    fumble?: string

}