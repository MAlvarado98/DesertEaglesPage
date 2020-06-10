const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    user: {type: String, required: true},
    password: {type: String, required: true},
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    isActive: {type: String, required: false},
    status: {type: Number, required: false},
    photo: {type: String, required: false},
    dateOfCreation: {type: Date, required: true},
    team: {type: String, required: true},
    motivationalPhrase: {type: String, required: false},
    permissions: {type: Array, required: false}
    //{Admin, Otorgar Permisos, Editor, Chat, Cambiar estilos}
});

module.exports = mongoose.model('User', userSchema);