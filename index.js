'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const personRoutes = require('./routes/person-routes.js');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/api', personRoutes.routes);

const activityRoutes = require('./routes/activity-routes.js');
app.use('/api',activityRoutes.routes);

app.get('/login',async (req, res ,next)=>{
    return res.render('loginPage');
})

app.get('/',async (req, res ,next)=>{
    return res.render('loginPage');
})

app.get('/admin',async (req,res,next)=>{
    return res.render('admin');
})

app.get('/client',async (req,res,next)=>{
    return res.render('client');
})
 

app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));