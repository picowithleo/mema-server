const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        language: {
            type: String,
            required: true
        },
        proficiencyLevel: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: true
        },
        //hide __v
        __v: {
            type: Number,
            select: false
        }
}, 
    {
        timestamps: true,
    }
);

 

const model = mongoose.model("User", schema);

module.exports = model;