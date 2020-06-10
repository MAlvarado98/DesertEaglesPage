const mongoose = require('mongoose');
const {Schema} = mongoose;

const wpSchema = new Schema({
    teamName: {type: String, required: true},
    teamNumber: {type: Number, required: true},
    seasonTitle: {type: String, required: false},
    teamLogo: {type: String, required: false},
    teamSeasonLogo: {type: String, required: false},
    homeBackgroundPhoto: {type: String, required: false},
    colorPalette: {type: Array, required: false}
});

module.exports = mongoose.model('WebPage', wpSchema);