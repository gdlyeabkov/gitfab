const bcrypt = require('bcrypt');
const saltRounds = 10;

const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

const app = express()

app.use('/', serveStatic(path.join(__dirname, '/dist')))

const url = `mongodb+srv://glebClusterUser:glebClusterUserPassword@cluster0.fvfru.mongodb.net/gitfab?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(url, connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

const RepoSchema = new mongoose.Schema({
    gitfaber: String,
    name: String,
    access: String,
    commits: {
        type: Number,
        default: 0
    },
    branches: {
        type: Number,
        default: 1
    },
    stars: {
        type: Number,
        default: 0
    },
    forks: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },
}, { collection : 'myrepos' });

const RepoModel = mongoose.model('RepoModel', RepoSchema);

const GitFaberSchema = new mongoose.Schema({
    email: String,
    password: String,
    repos: [mongoose.Schema.Types.Map]
}, { collection : 'mygitfabers' });

const GitFaberModel = mongoose.model('GitFaberModel', GitFaberSchema);

app.get('/gitfabers/get',(req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    res.json({ 'status': 'OK' })

})

app.get('**', (req, res) => { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    return res.redirect(`http://localhost:4000`)
})

// const port = process.env.PORT || 8080
const port = 4000  
app.listen(port)