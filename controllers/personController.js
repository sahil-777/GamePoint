'use strict';

const firebase = require('../db');
const firestore = firebase.firestore();
const Person = require('../models/person');
 
const addPerson = async (req, res, next) => {
    try {
        const data = req.body;
        const docRef =await firestore.collection('person').doc();
        console.log("Doc Id => "+docRef.id);
        data.id=docRef.id;   //  Modifying id
        data.role=req.params.role; //  Assigning role, Admin: 1, Client: 0. 
        console.log("Added Person data => ", data);
        await firestore.collection('person').doc(docRef.id).set(data);
        //console.log(docRef.id);
        res.send('Person Added Successfully!');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = addPerson;