'use strict';

const firebase = require('../db');
const firestore = firebase.firestore();
const Activity = require('../models/activity');
 
const logintoAccount = async (req, res, next) => {
    try {
        const data = req.body;
        console.log(data);
            if(data.username!="person" || data.password!="pass@1234"){
                console.log('Person Not found!');
                res.send('Incorrect username/password!');
            }
            else{
                let loginData={
                    "id":0,
                    "logintime":Date.now(),
                    "logoutime":999999999999999,
                    "role":req.params.role
                }
                if(req.params.role==1)
                return res.redirect('/admin');
                else{
                
                const docRef =await firestore.collection('activity').doc();
                console.log("Activity Id => "+docRef.id);
                loginData.id=docRef.id;   //  Modifying id
                console.log("Login Person data => ", loginData);
                await firestore.collection('activity').doc(docRef.id).set(loginData);
                let Id=loginData.id;
                res.redirect('/client/'+Id);
                }
                //res.send('Activity-Added/Loggedin Successfully!');
            }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const logoutClient = async (req, res, next) => {
    try {
        const id = req.params.id;
        let data={
            "logoutime":Date.now()
        }
        console.log(data);
        const client =  await firestore.collection('activity').doc(id);
        await client.update(data);
        res.send('Loggedout successfuly!');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    logintoAccount,
    logoutClient
};

/*{
    "id":"108",
    "logintime":"9",
    "logoutime":"10",
    "role":1
}*/
