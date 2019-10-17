const app = module.exports = require('express')()
const controllers = require('../../services/controllers')

app.get('/health', (req, res) => res.sendStatus(200))

app.get('/campi', async (req, res) => {
    try {
        res.json(await controllers.getCampi())
    } catch(err){
        console.log(err)
        res.sendStatus(500)
    }        
})

app.get('/campi/:campus', async (req, res) => {
    try {
        res.json(await controllers.getCampus(req.params.campus))
    } catch(err){
        console.log(err)
        res.sendStatus(500)
    }        
})

app.get('/campi/:campus/buildings', async (req, res) => {
    try {
        res.json(await controllers.getBuildings(req.params.campus))
    } catch(err){
        console.log(err)
        res.sendStatus(500)
    }        
})

app.get('/campi/:campus/buildings/:build/rooms/:room', async (req, res) => {
    try {
        if(!req.query.day)
            res.json(await controllers.getRoom(req.params.room))
        else
            res.json(await controllers.getDay(req.params.room, req.query.day))
    } catch(err){
        console.log(err)
        res.sendStatus(500)
    }        
})

app.all('*', (req, res) => {
    res.sendStatus(404)
})
