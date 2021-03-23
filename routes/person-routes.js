const express = require('express');
const {displayAdminPage,displayClientPage} = require('../controllers/personController');
const router = express.Router();

router.get('/admin',displayAdminPage); 
router.get('/client/:Id',displayClientPage); 

module.exports = {
    routes: router
}