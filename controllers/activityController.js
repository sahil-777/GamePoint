'use strict';

const firebase = require('../db');
const firestore = firebase.firestore();
const Activity = require('../models/activity');
 
const login = async (req, res, next) => {
    try {
        const data = req.body;
        console.log(data);
        let query =await firestore.collection('person').where('username', '==', data.username);
        query.get().then(querySnapshot => {
            if(querySnapshot.empty){
                console.log('Person Not found!');
                res.send('Incorrect username!');
            }
            else{
                let loginData={
                    "logintime":Date.now(),
                    "logoutime":999999999999999,
                    "role":req.params.role
                }
                console.log("LoggedIn Data => ", loginData );
                firestore.collection('activity').doc().set(loginData);
                res.send('Activity-Added/Loggedin Successfully!');
            }
             
        });
        //console.log(a);
        
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
