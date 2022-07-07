const mongoose = require('mongoose');

const FicheShema = mongoose.Schema({
  type_fiche : { type : String, enum: ['official_creature'], required : true },
  userId : {},
  nom: { type: String, required : true },
  image : { type: String },
  taille: { type: String },
  exp: { type: Number, default: 0},
  location: {
    mezoide: { type: Boolean, default : false },
    rocheuses: { type: Boolean, default : false },
    tagata: { type: Boolean, default : false },
    oland: { type: Boolean, default : false },
    iles : { type : Boolean, default : false },
    big_blue : { type : Boolean, default : false },
    desert : { type : Boolean, default : false },
    paradis: { type : Boolean, default : false },
    enfer: { type : Boolean, default : false },
    life: { type : Boolean, default : false },
    death: { type : Boolean, default : false },
    archaia: { type : Boolean, default : false },
  },
  pv: { type: Number, required : true},
  mana: { type: Number, required : true},
  force: { type: Number, default: 10},
  dexterite: { type: Number, default: 10},
  constitution: { type: Number, default: 10},
  intelligence: { type: Number, default: 10},
  sagesse: { type: Number, default: 10},
  charisme: { type: Number, default: 10},
  description: { type: String},
  arme_1: {
    nom: { type: String },
    type :{ type: String, enum: ['tranchant', 'contendant', 'percant', 'distance']},
    degat: { type: String },
    parade: { type: Number, default : 0 },
    portee: { type : String},
    rupture: { type: Number, default: 4, enum: [4, 3, 2, 1, 0] },
    bonus_malus: { type: String }
  },
  arme_2: {
    nom: { type: String },
    type :{ type: String, enum: ['tranchant', 'contendant', 'percant', 'distance']},
    degat: { type: String },
    parade: { type: Number, default : 0 },
    portee: { type : String},
    rupture: { type: Number, default: 4, enum: [4, 3, 2, 1, 0] },
    bonus_malus: { type: String }
  },
  arme_3: {
    nom: { type: String },
    type :{ type: String, enum: ['tranchant', 'contendant', 'percant', 'distance']},
    degat: { type: String },
    parade: { type: Number, default : 0 },
    portee: { type : String},
    rupture: { type: Number, default: 4, enum: [4, 3, 2, 1, 0] },
    bonus_malus: { type: String }
  },
  arme_4: {
    nom: { type: String },
    type :{ type: String, enum: ['tranchant', 'contendant', 'percant', 'distance']},
    degat: { type: String },
    parade: { type: Number, default : 0 },
    portee: { type : String},
    rupture: { type: Number, default: 4, enum: [4, 3, 2, 1, 0] },
    bonus_malus: { type: String }
  },
  bouclier: { 
    nom: { type: String },
    type :{ type: String, enum: ['leger', 'intermediaire', 'lourd']},
    parade: { type: Number, default : 0 },
    pr_physique: { type: Number, default : 0 },
    pr_magique: { type: Number, default : 0 },
    rupture: { type: Number, default: 4, enum: [4, 3, 2, 1, 0] },
    bonus_malus: { type: String }
  },
  armure: {
    naturelle: { 
      pr_physique: { type: Number, default : 0 },
      pr_magique: { type: Number, default : 0 },
      bonus_malus: { type: String }
    },
    tete: {
      nom: { type: String },
      type :{ type: String, enum: ['legere', 'intermediaire', 'lourde']},
      pr_physique: { type: Number, default : 0 },
      pr_magique: { type: Number, default : 0 },
      rupture: { type: Number, default: 4, enum: [4, 3, 2, 1, 0] },
      bonus_malus: { type: String }

    },
    torse: {
      nom: { type: String },
      type :{ type: String, enum: ['legere', 'intermediaire', 'lourde']},
      pr_physique: { type: Number, default : 0 },
      pr_magique: { type: Number, default : 0 },
      rupture: { type: Number, default: 4, enum: [4, 3, 2, 1, 0] },
      bonus_malus: { type: String }

    },
    bras: {
      nom: { type: String },
      type :{ type: String, enum: ['legere', 'intermediaire', 'lourde']},
      pr_physique: { type: Number, default : 0 },
      pr_magique: { type: Number, default : 0 },
      rupture: { type: Number, default: 4, enum: [4, 3, 2, 1, 0] },
      bonus_malus: { type: String }

    },
    jambes: {
      nom: { type: String },
      type :{ type: String, enum: ['legere', 'intermediaire', 'lourde']},
      pr_physique: { type: Number, default : 0 },
      pr_magique: { type: Number, default : 0 },
      rupture: { type: Number, default: 4, enum: [4, 3, 2, 1, 0] },
      bonus_malus: { type: String }

    }
  },
  objets_magique: {
    anneau_droit: {
      nom: { type: String },
      effet: { type: String }
    },
    anneau_gauche: {
      nom: { type: String },
      effet: { type: String }
    },
    collier: {
      nom: { type: String },
      effet: { type: String }
    }
  },
  bourse: {
    po: { type: Number, default: 0 },
    pa: { type: Number, default: 0 },
    pb: { type: Number, default: 0 }
  },
  competences: {
    acrobatie: { type: Number, default: -4 },
    arcane: { type: Number, default: -4 },
    athletisme: { type: Number, default: -4 },
    discretion: { type: Number, default: -4 },
    dressage: { type: Number, default: -4 },
    escamotage: { type: Number, default: -4 },
    histoire: { type: Number, default: -4 },
    intimidation: { type: Number, default: -4 },
    intuition: { type: Number, default: -4 },
    investigation:{ type: Number, default: -4 },
    medecine: { type: Number, default: -4 },
    maitrise_arcanes: { type: Number, default: -4 },
    mysteres: { type: Number, default: -4 },
    nature: { type: Number, default: -4 },
    perception: { type: Number, default: -4 },
    persuasion: { type: Number, default: -4 },
    religion: { type: Number, default: -4 },
    representation: { type: Number, default: -4 },
    survie: { type: Number, default: -4 },
    tromperie: { type: Number, default: -4 }
  },
  sort : {type : mongoose.Schema.Types.ObjectId, ref: "Sort"},
  trait : {type : mongoose.Schema.Types.ObjectId, ref: "Trait"},
  potion : {type : mongoose.Schema.Types.ObjectId, ref: "Potion"},
  special : {type : mongoose.Schema.Types.ObjectId, ref: "Special"},
});

const SortShema = mongoose.Schema({
  nom: { type: String, required: true},
  niveau: { type: String, required: true, enum: [0, 1, 2, 3, 4, 5, 6 ,7]},
  incantation: { type: String},
  portee: { type: String},
  cout: { type: String},
  duree: { type: String},
  aire_effet: { type: String},
  formule: { type: String},
  effet: { type: String, required: true},
  reussite_critique: { type: String},
  echec_critique: { type: String},
});

const TraitShema = mongoose.Schema({
  nom: { type: String, required: true},
  effet: { type: String, required: true},
  bonus_malus : {type : String}
});

const PotionShema = mongoose.Schema({
  nom: { type: String, required: true},
  effet: { type: String, required: true},
  dose : {type : Number, default: 0}
});

const SpecialShema = mongoose.Schema({
  nom: { type: String, required: true},
  description: { type: String, required: true}
});

module.exports = mongoose.model("Fiche", FicheShema);
module.exports = mongoose.model("Sort", SortShema);
module.exports = mongoose.model("Trait", TraitShema);
module.exports = mongoose.model("Potion", PotionShema);
module.exports = mongoose.model("Special", SpecialShema);