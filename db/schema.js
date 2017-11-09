const mongoose = require('mongoose')

const Schema = mongoose.Schema

const creatureSchema = new Schema({
  name: String,
  description: String
})

const Creature = mongoose.model('Creature', creatureSchema)

module.exports = {
  Creature
}


