const express = require('express');
const {logintoAccount,logoutClient} = require('../controllers/activityController');
const router = express.Router();

router.post('/login/:role',logintoAccount);
router.get('/logout/:id',logoutClient);

module.exports = {
    routes: router
}
