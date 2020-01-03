const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/api/usuarios', UserController.store);
routes.get('/api/usuarios', UserController.index);


module.exports = routes;