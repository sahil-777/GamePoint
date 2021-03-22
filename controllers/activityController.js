'use strict';

const firebase = require('../db');
const firestore = firebase.firestore();
const Activity = require('../models/activity');
 
const login = async (req, res, next) => {
    try {
        const data = req.body;
        data.logintime=Date.now();
        console.log(data);
        await firestore.collection('activity').doc().set(data);
        res.send('Activity-Added/Loggedin Successfully!');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = login;

/*{
    "id":"108",
    "logintime":"9",
    "logoutime":"10",
    "role":1
}*/
