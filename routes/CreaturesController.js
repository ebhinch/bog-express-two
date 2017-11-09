const express = require('express')
const router = express.Router()

const { Creature } = require('../db/schema.js')



//display creature list
router.get('/', async (request, response) => {
    try {
        const creatures = await Creature.find({})
        response.json(creatures)
    } catch (error) {
        response.send(error)
    }
})


//display individual creature
router.get("/:id", async (request, response) => {
    try {
        console.log(request.params.id)
        const creature = await Creature.findById(request.params.id)
        response.json(creature)
    } catch (error) {
        response.send(error)
    }
})

//make new creature
router.post("/", async (request, response) => {
    try {
        const newCreature = new Creature(request.body)
        const saved = await newCreature.save()
        response.json(saved)
    }
    catch (error) {
        response.send(error)
    }
})


//update creature
router.put("/:id", async(request, response) => {
    try{
      const updatedCreature = request.body
      const creature = await Creature.findByIdAndUpdate(request.params.id, updatedCreature, {new: true})
  
      const saved = await creature.save()
      response.json(saved)
    } catch(error) {
    response.send(error)
  }
  })


//delete creatures
router.delete("/:id", async(request, response ) => {
    try {
      const creature = await Creature.findById(request.params.id).remove()
      const creatures = await Creature.find({})
      response.send(creatures)
  
    } catch (error) {
      response.send(error)
    }
  })
  


module.exports = router

