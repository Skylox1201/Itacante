const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userShema = mongoose.Schema({
    email:{type :String, required : true, unique: true},
    password: {type: String, required : true},
    pseudo:{type :String, required : true, unique: true},
    image:{type: String},
    isAdmin: {type : Boolean, default: false}
});

userShema.plugin(uniqueValidator);

module.exports = mongoose.model('Itacante', userShema, 'user');
