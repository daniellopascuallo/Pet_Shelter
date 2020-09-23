const { query } = require('express');
const Pet = require('../models/model.pets');

module.exports = {
    index: (request, response) => {
        Pet.find()
            .then(pets => response.json({ results: pets }))
            .catch(err => response.json(err.errors));
    },
    create: (request, response) => {
        Pet.create(request.body)
            .then(pet => response.json({ results: pet }))
            .catch(err => response.json(err.errors))
    },
    show: (request, response) => {
        Pet.findOne({ _id: request.params.id })
            .then(pet => response.json({ results: pet }))
            .catch(err => response.json(err.errors))
    },
    update: (request, response) => {
        Pet.findOneAndUpdate({ _id: request.params.id }, request.body, {
            useFindAndModify: false,
            runValidators: true,
            context: "query",
            new: true
        })
            .then(pet => response.json({ results: pet }))
            .catch(err => response.json(err.errors))
    },
    destroy: (request, response) => {
        Pet.deleteOne({ _id: request.params.id })
            .then(result => response.json({ results: result }))
            .catch(err => response.json(err.errors))
    }
}