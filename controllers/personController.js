'use strict';
const firebase = require('../db');
const firestore = firebase.firestore();
const Person = require('../models/person');
const request = require('request');

const displayAdminPage=async (req,res,next)=>{
    try{
        request({
            url: 'http://localhost:8080/api/getAllActive',
            method: 'GET',
            json:{}
        }, function(error, response, body){
            if(error) res.status(400).send(error.message);
            //console.log('error', error);
            //console.log('response', response);
            console.log('body=> ', body);
            return res.render('admin',{ActiveClients:body,firestore:firestore});
        });
    }
    catch(error){
        res.status(400).send(error.message);
    }
};


const displayClientPage= async (req,res,next)=>{
    try{
        console.log(req.params.Id);
        let client={
            "Id":req.params.Id
        };
        return res.render('client',{client:client});
    }
    catch(error){
        res.status(400).send(error.message);
    }
};

module.exports = {
    displayAdminPage,
    displayClientPage
};

/*
{
    "id":"0",
    "username":"SahilVelhal",
    "password":"Pass@1234",
    "role":1
}
*/