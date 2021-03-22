const express = require('express');
const addPerson = require('../controllers/personController');
const router = express.Router();

router.post('/person/:role', addPerson);


module.exports = {
    routes: router
}