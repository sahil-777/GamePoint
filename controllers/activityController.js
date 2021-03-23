'use strict';

const firebase = require('../db');
const firestore = firebase.firestore();
const Activity = require('../models/activity');
 
const login = async (req, res, next) => {
    try {
        const data = req.body;
        console.log(data);
            if(data.username!="person" || data.password!="pass@1234"){
                console.log('Person Not found!');
                res.send('Incorrect username/password!');
            }
            else{
                let loginData={
                    "logintime":Date.now(),
                    "logoutime":999999999999999,
                    "role":req.params.role
                }
                console.log("LoggedIn Data => ", loginData );
                await firestore.collection('activity').doc().set(loginData);
                if(req.params.role==1)
                res.redirect('/admin');
                else
                res.redirect('/client');
                //res.send('Activity-Added/Loggedin Successfully!');
            }
 
        
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
