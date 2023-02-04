import { Injectable } from "@angular/core";
import { Fiche } from "../fiche/models/fiche.model";

@Injectable({
    providedIn: 'root'
})
export class FicheService {
    fiches: Fiche[] = [
        {
            id: 1,
            name: 'Poule de feu',
            description: "Ce gallinacé prends spontanément feu lorsqu'il se sent menacé. Il est considéré comme nuisible en Tagata de par les nombreux incendies dont il est la cause.",
            imageUrl: "https://i.pinimg.com/originals/11/a0/31/11a031164cf4b4eab86be1b830021636.jpg",
            type: "official_creature",
            taille: "xs",
            exp: 12,
            pv: 5,
            mana: 2,
            force: 6,
            dexterite: 10,
            constitution: 8,
            intelligence: 4,
            sagesse: 12,
            charisme: 4,
            locationMezoide: false,
            locationRocheuses: false,
            locationTagata: true,
            locationOland: false,
            locationIles: false,
            locationBlue: false,
            locationDesert: false,
            locationParadis: false,
            locationEnfer: false,
            locationLife: false,
            locationDeath: false,
            locationArchaia: false,
            competenceAcrobatie: -4,
            competenceArcane: -4,
            competenceAthletisme: 0,
            competenceDiscretion: -4,
            competenceDressage: -4,
            competenceEscamotage: -4,
            competenceHistoire: -4,
            competenceIntimidation: -4,
            competenceIntuition: -4,
            competenceInvestigation: -4,
            competenceMaitriseArcanes: -4,
            competenceMedecine: -4,
            competenceMystere: -4,
            competenceNature: 0,
            competencePerception: 2,
            competencePersuasion: -4,
            competenceReligion: -4,
            competenceRepresentation: -4,
            competenceSurvie: 0,
            competenceTromperie : -4,
        },
    ]

    getAllFiches(): Fiche[] {
        return this.fiches;
    }

    getFicheById(ficheid : number): Fiche {
        const fiche = this.fiches.find(fiche => fiche.id === ficheid);
        if (!fiche) {
            throw new Error("Erreur : Fiche non trouvé !");
        } else {
            return fiche;
        }
    }

    getFicheByType(ficheType : 'official_creature' | 'creature'): Fiche {
        const fiche = this.fiches.find(fiche => fiche.type === ficheType);
        if (!fiche) {
            throw new Error("Erreur : Fiches non trouvé !");
        } else {
            return fiche;
        }
    }
}