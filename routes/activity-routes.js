const express = require('express');
const logintoAccount = require('../controllers/activityController');
const router = express.Router();

router.post('/login/:role',logintoAccount);

module.exports = {
    routes: router
}
