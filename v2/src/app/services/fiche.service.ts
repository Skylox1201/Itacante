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
            createDate: new Date(),
            imageUrl: "https://i.pinimg.com/originals/11/a0/31/11a031164cf4b4eab86be1b830021636.jpg",
            type: "official_creature"
        },
        {
            id: 2,
            name: 'Poule de feu',
            description: "Ce gallinacé prends spontanément feu lorsqu'il se sent menacé. Il est considéré comme nuisible en Tagata de par les nombreux incendies dont il est la cause.",
            createDate: new Date(),
            imageUrl: "https://i.pinimg.com/originals/11/a0/31/11a031164cf4b4eab86be1b830021636.jpg",
            type: "creature"
        },
        {
            id: 3,
            name: 'Poule de feu',
            description: "Ce gallinacé prends spontanément feu lorsqu'il se sent menacé. Il est considéré comme nuisible en Tagata de par les nombreux incendies dont il est la cause.",
            createDate: new Date(),
            imageUrl: "https://i.pinimg.com/originals/11/a0/31/11a031164cf4b4eab86be1b830021636.jpg",
            type: "official_creature"
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