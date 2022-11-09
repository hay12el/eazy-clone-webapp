const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const businessSchema = new Schema({
    BName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true 
    },
    city: {
        type: String,
        require: true
    },
    street: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: false
    },
    photos: {
        type: [String],
        required: false
    },
    hours:{
        type: [Number],
        required: false
    },
    description: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Business", businessSchema);