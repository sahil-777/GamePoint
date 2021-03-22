'use strict';

const firebase = require('../db');
const firestore = firebase.firestore();
const Person = require('../models/person');
 
const addPerson = async (req, res, next) => {
    try {
        const data = req.body;
        console.log(data);
        await firestore.collection('person').doc().set(data);
        res.send('Person Added Successfully!');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = addPerson;