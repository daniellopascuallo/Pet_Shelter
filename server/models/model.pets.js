const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A name is required"],
        minlength: [3, "Name must be at least 3 characters"],
        unique: true
    },
    type: {
        type: String,
        required: [true, "Type is required"],
        minlength: [3, "Type must be at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description must be at least 3 characters"]
    },
    skillOne: {
        type: String,
        default: ""
    },
    skillTwo: {
        type: String,
        default: ""
    },
    skillThree: {
        type: String,
        default: ""
    }
}, { timestamps: true })

PetSchema.plugin(uniqueValidator, {message: "Please enter another name, {VALUE} is already in use"});
const Pet = mongoose.model("Pet", PetSchema);
module.exports = Pet;