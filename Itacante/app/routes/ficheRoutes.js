const express = require('express');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')

const router = express.Router();


const ficheCtrl = require('../controller/ficheController')

router.post('/', auth, multer, ficheCtrl.create_fiche)
router.put('/:id',auth, multer, ficheCtrl.modify_fiche);
router.delete('/:id',auth, ficheCtrl.delete_fiche);
router.get('/:id',auth, ficheCtrl.get_one_fiche)
router.get('/',auth, ficheCtrl.get_all_fiche )
router.get('/:type_fiche', auth, ficheCtrl.get_fiche_by_type)

module.exports = router;