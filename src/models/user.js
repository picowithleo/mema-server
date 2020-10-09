const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const schema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            validate: {
                validator: email => 
                    !Joi.string()
                        .email().
                        validate(email).error,
                msg: 'Invalid email format'
            }
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 16
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
        // auth: {
        //     tpye: mongoose.Schema.Types.ObjectId,
        //     ref: "Auth"
        // },
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