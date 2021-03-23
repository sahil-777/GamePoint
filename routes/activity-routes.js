const express = require('express');
const {logintoAccount,logoutClient,getAllActive} = require('../controllers/activityController');
const router = express.Router();

router.post('/login/:role',logintoAccount);
router.get('/logout/:id',logoutClient);
router.get('/getAllActive',getAllActive);

module.exports = {
    routes: router
}
