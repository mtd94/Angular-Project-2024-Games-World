const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

let gameSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minLength:[3,'Name length must be a 3 character minimum'],
    },
    imgUrl: {
        type: String,
        required: true,
        validate: /^https?:\/\//i,
    },
    description: {
        type: String,
        required: true,
        minLength:[5,'Description length must be a 5 character minimum'],
    },
    year: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true,
        minLength:[3,'Genre length must be a 3 character minimum'],
    },

 userId: {
    type: ObjectId,
    ref: "User"
 },
 owner:{
    type: mongoose.Types.ObjectId,
    ref: "User"
 }
 


})

module.exports = mongoose.model('Games', gameSchema);