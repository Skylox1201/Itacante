const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Skylox:JonAlex1201-Itacante@itacante.a9xkmjv.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));