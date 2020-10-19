const mongoose = require('mongoose');


const schema = new mongoose.Schema(
    {
        Chinese: {
            type: String,
            required: true,
        },
        French: {
            type: String,
            required: true,
        },
        English: {
            type: String,
            required: true
        },
        Japanese: {
            type: String,
            required: true,
        },
        Germany: {
            type: String,
            required: true,
        },
        Italy: {
            type: String,
            required: true
        },
        Korea: {
            type: String,
            required: true
        },
        Pinyin: {
            type: String,
            required: true
        }
    }
);

 

const model = mongoose.model("Translate", schema);

module.exports = model;