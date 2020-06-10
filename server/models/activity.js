const mongoose = require('mongoose');
const {Schema} = mongoose;

const activitySchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    dateOfCreation: {type: Date, required: true},
    dateOfActivity: {type: Date, required: true},
    script: {type: String, required: true}
});

module.exports = mongoose.model('Activity', activitySchema);