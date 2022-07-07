const Fiche = require ('../models/FicheModel');
const fs = require('fs');

exports.create_fiche = (req, res, next) =>{
    const ficheObject = JSON.parse(req.body.fiche);
    delete ficheObject._id;
    delete ficheObject._userId;
    const fiche = new Fiche({
        ...ficheObject,
        userId: req.auth.userId,
        imageUrl: `${req.protocol}://${req.get('host')}/media/${req.file.filename}`
    })

    fiche.save()
    .then(() => {res.status(201).json({message : "Object créé !"})})
    .catch(error => { res.status(400).json ({error})});
}

exports.modify_fiche = (req, res, next) =>{
    const ficheObject = req.file? {
        ...JSON.parse(req.body.fiche),
        imageUrl: `${req.protocol}://${req.get('host')}/media/${req.file.filename}`
    } : { ...req.body};

    delete ficheObject._userId;
    Fiche.findOne({_id: req.params.id})
    .then((fiche) => {
        if (fiche.userId != req.auth.userId) {
            res.status(400).json({message : 'Non-autorisé'});
        }else{
            Fiche.updateOne({_id: req.params.id}, {...ficheObject, _id: req.params.id})
            .then(() => res.status(200).json({message : 'Object modifié !'}))
            .catch(error => { res.status(400).json( { error })});
        }
    })
    .catch(error => { res.status(400).json( { error })});
}

exports.delete_fiche = (req, res, next) =>{
    Fiche.findOne({_id: req.params.id})
    .then((fiche) => {
        if (thing.userId != requestAnimationFrame.auth.userId){
            res.status(401).json({message : 'Non-autorisé'});
        } else {
            const filename = fiche.imageUrl.split('/media/')[1];
            fs.unlink(`image/${filename}`, () => {
                Fiche.deleteOne({_id: req.params.id})
                .then(() => res.status(200).json({message : 'Object supprimé !'}))
                .catch(error => res.status(404).json({error}))
            })
        }
    })
    .catch(error => { res.status(500).json( { error })});  
}

exports.get_one_fiche = (req, res, next) => {
    Fiche.findOne({_id: req.params.id})
    .then(fiche => res.status(200).json(fiche))
    .catch(error => res.status(404).json({error}))
}

exports.get_all_fiche = (req, res, next) => {
    Fiche.find()
    .then(fiches => res.status(200).json(fiches))
    .catch(error => res.status(400).json({error}))
}

exports.get_fiche_by_type = (req, res, next) => {
    Fiche.find({type_fiche: req.params.type_fiche})
    .then(fiches => res.status(200).json(fiches))
    .catch(error => res.status(400).json({error}))
}