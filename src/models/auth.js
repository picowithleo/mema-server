const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');

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
        } 
    }
);

schema.methods.hashPassword = async function() {
    this.password = await bcrypt.hash(this.password, 10);
}

schema.methods.validatePassword = async function(password) {
    const validPassword = await bcrypt.compare(password, this.password);
    return validPassword;
};

 

const model = mongoose.model("Auth", schema);

module.exports = model;