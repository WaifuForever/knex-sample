const express = require('express');
const routes = express.Router()

const PilotController = require('./controllers/PilotController')
const TeamController = require('./controllers/TeamController')
const CountryController = require('./controllers/CountryController')

routes.get('/', (req, res) => {
    return res.json("Hello World");
});

routes.post('/teams', TeamController.store);
routes.get('/teams', TeamController.index);


routes.post('/pilots', PilotController.store);
routes.post('/pilots', PilotController.store);


routes.get('/countries', CountryController.index);
routes.post('/countries', CountryController.store);

module.exports = routes;