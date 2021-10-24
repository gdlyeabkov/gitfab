const bcrypt = require('bcrypt');
const saltRounds = 10;
const nodemailer = require("nodemailer")

const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

const app = express()

app.use('/', serveStatic(path.join(__dirname, '/dist')))

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gdlyeabkov@gmail.com',
        pass: 'myreversepassword'
    }
})

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
    description: String,
    access: String,
    addReadme: Boolean,
    addGitIngore: Boolean,
    chooseALicence: Boolean,
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
    name: String,
    appearance: {
        type: String,
        default: 'default light'
    },
    publicEmail: String,
    bio: {
        type: String,
        default: ''
    },
    url: {
        type: String,
        default: ''
    },
    twitter: {
        type: String,
        default: ''
    },
    company: {
        type: String,
        default: ''
    },
    location: {
        type: String,
        default: ''
    },
    emails: [mongoose.Schema.Types.Map],
    emailPreferences: {
        type: String,
        default: 'Receive all emails, except those I unsubscribe from.'
    },
    keepMyEmailAddressesPrivate: {
        type: Boolean,
        default: true
    },
    blockCommandLinePushesThatExposeMyEmail: {
        type: Boolean,
        default: false
    },
    backupEmail: {
        type: String,
        default: 'Allowed all verified emails'
    },
    dependencyGraph: {
        type: Boolean,
        default: false
    },
    dependabotAlerts: {
        type: Boolean,
        default: false
    },
    dependabotSecurityUpdates: {
        type: Boolean,
        default: false
    },
    billing: {
        type: String,
        default: "Gitfab free"
    },
    keys: [mongoose.Schema.Types.Map],
    sessions: [mongoose.Schema.Types.Map],
    repos: [mongoose.Schema.Types.Map],
    deletedRepos: [mongoose.Schema.Types.Map],
}, { collection : 'mygitfabers' });

const GitFaberModel = mongoose.model('GitFaberModel', GitFaberSchema);

app.get('/api/gitfabers/create',(req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query = GitFaberModel.find({})
    query.exec((err, allGitfabers) => {
        if (err){
            return res.json({ "status": "Error" })
        }
        let gitfaberExists = false;
        allGitfabers.forEach(gitfaber => {
            if(gitfaber.email.includes(req.query.gitfaberemail)){
                gitfaberExists = true
            }
        });
        if(gitfaberExists){
            return res.json({ "status": "Error" })
        } else {
            let encodedPassword = "#"
            let salt = bcrypt.genSalt(saltRounds)
            let generatedPassword = ''
            let alphabet = "abcdefghjiklmnoprstuvwxyz"
            for(let i = 0; i < Math.floor(Math.random() * 10); i++){
                let randomIndex = Math.floor(Math.random() * alphabet.length)
                let randomLetter = alphabet[randomIndex]
                generatedPassword += randomLetter
            }        
            encodedPassword = bcrypt.hashSync(generatedPassword, saltRounds)
            let gitfaber = new GitFaberModel({ email: req.query.gitfaberemail, password: encodedPassword, name: req.query.gitfaberemail.split('@')[0], publicEmail: req.query.gitfaberemail });
            gitfaber.save(function (err) {
                if(err){
                    return res.json({ "status": "Error" })
                } else {
                    let mailOptions = {
                        from: `"${'gdlyeabkov'}" <${"gdlyeabkov"}>`,
                        to: `${req.query.gitfaberemail}`,
                        subject: `Никому не называйте пароль!`,
                        html: `<h3>Gitfab сгенерировал вам пароль</h3><p>Ваш пароль: ${generatedPassword}</p>`,
                    }
                    transporter.sendMail(mailOptions, function (err, info) {
                        return res.json({ 'status': 'OK', 'newpassword': generatedPassword })
                    })
                }
            })
        }
    })
})

app.get('/api/repos/create',(req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query = RepoModel.find({})
    query.exec((err, allRepos) => {
        if (err){
            return res.json({ "status": "Error" })
        }
        let repoExists = false;
        allRepos.forEach(repo => {
            if(repo.name.includes(req.query.reponame)){
                repoExists = true
            }
        });
        if(repoExists){
            return res.json({ "status": "Error" })
        } else {
            let newRepo = new RepoModel({ name: req.query.reponame, description: req.query.repodescription, access: req.query.repoaccess, addReadme: req.query.addreadme, addGitIngore: req.query.addgitignore, chooseALicence: req.query.choosealicense, gitfaber: req.query.gitfaberemail });
            newRepo.save(function (err) {
                if(err){
                    return res.json({ "status": "Error" })
                } else {
                    GitFaberModel.updateOne({ email: req.query.gitfaberemail },
                        { $push: 
                            {
                                repos: [
                                    {
                                        name: req.query.reponame
                                    }
                                ]
                                
                            }
                    }, (err, repo) => {
                        if(err){
                            return res.json({ "status": "error" })
                        } else {
                            return res.json({ 'status': 'OK' })
                        }
                    })                
                }
            })
        }
    })
})

app.get('/api/repos/get', (req,res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query =  RepoModel.findOne({'_id': req.query.repoid}, function(err, repo){
        if (err){
            return res.json({ "status": "Error" })
        } else {
            let query =  GitFaberModel.findOne({'email': repo.gitfaber}, function(err, gitfaber){
                if (err){
                    return res.json({ "status": "Error" })
                } else {
                    return res.json({ 'status': 'OK', repo: repo, gitfaber: gitfaber })
                }
            })    
        }
    })

})

app.get('/api/stars/add', (req,res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    RepoModel.updateOne({ _id: req.query.repoid },
    {
        "$inc": { "stars": 1 }
    }, (err, repo) => {
        if(err){
            return res.json({ "status": "Error" })
        } else {
            return res.json({ "status": "OK" })
        }
    })

})

app.get('/api/gitfabers/get', (req,res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query =  GitFaberModel.findOne({'email': req.query.gitfaberemail}, function(err, gitfaber){
        if (err){
            return res.json({ "status": "Error" })
        } else {
            let query =  RepoModel.find({'gitfaber': req.query.gitfaberemail}, function(err, allRepos){
                if(err) {
                    return res.json({ "status": "Error" })
                }
                return res.json({ status: 'OK', gitfaber: gitfaber, repos: allRepos })
            })
        }
    })

})

app.get('/api/gitfabers/check', (req,res)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let queryBefore = GitFaberModel.find({ email: { $in: req.query.gitfaberemail }  })
    queryBefore.exec((err, allGitfabers) => {
        if(err){
            return res.json({ "status": "Error" })
        }
        if(allGitfabers.length >= 1){
            let query =  GitFaberModel.findOne({'email': req.query.gitfaberemail}, function(err, gitfaber){
                if (err){
                    return res.json({ "status": "Error" })
                } else {
                    const passwordCheck = bcrypt.compareSync(req.query.gitfaberpassword, gitfaber.password) && req.query.gitfaberpassword !== ''
                    if(gitfaber != null && gitfaber != undefined && passwordCheck){
                        
                        GitFaberModel.updateOne({ email: req.query.gitfaberemail },
                            { $push: 
                                {
                                    sessions: [
                                        {
                                            ip: req.query.newip,
                                            date: req.query.newdate,
                                            city: req.query.newcity,
                                            browser: req.query.newbrowser,
                                        }
                                    ]
                                    
                                }
                        }, (err, gitfaber) => {
                            if(err){
                                return res.json({ "status": "error" })
                            } else {
                                return res.json({ "status": "OK", "gitfaber": gitfaber })
                            }
                        })
                    } else {
                        return res.json({ "status": "Error" })
                    }
                }
            })    
        } else if(allEmployers.length <= 0){
            return res.json({ "status": "Error" })
        }
    })
})

app.get('/git/test', (req, res) => { 
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    console.log(`hangle git`)
    return res.sendFile(__dirname + `/gittest/.git`)

    //return res.json({ "status": "handle" })

})

app.get('/api/gitfabers/appearance/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    GitFaberModel.updateOne({ email: req.query.gitfaberemail }, { appearance: req.query.theme }, (err, gitfaber) => {
        if(err){
            return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })    
    })

})

app.get('/api/account/delete', async (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query =  GitFaberModel.findOne({ 'email': req.query.gitfaberemail}, async function(err, gitfaber){
        if (err){
            return res.json({ "status": "Error" })
        } else {
            await RepoModel.deleteMany({ name: { $in: gitfaber.repos.flatMap((repo) => new Map(repo).get('name')) }  })
            await GitFaberModel.deleteOne({ email: req.query.gitfaberemail  })
            return res.json({ status: 'OK' })
        }
    })

})


app.get('/api/gitfabers/name/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    GitFaberModel.updateOne({ email: req.query.gitfaberemail }, { name: req.query.newname }, (err, gitfaber) => {
        if(err){
            return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })    
    })
})

app.get('/api/gitfabers/primaryemail/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    GitFaberModel.updateOne({ email: req.query.gitfaberemail }, { publicEmail: req.query.primaryemail }, (err, gitfaber) => {
        if(err){
            return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })    
    })
})

app.get('/api/gitfabers/emailpreferences/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    GitFaberModel.updateOne({ email: req.query.gitfaberemail }, { emailPreferences: req.query.newemailpreferences }, (err, gitfaber) => {
        if(err){
            return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })    
    })
})

app.get('/api/gitfabers/backupemail/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    GitFaberModel.updateOne({ email: req.query.gitfaberemail }, { backupEmail: req.query.newbackupemail }, (err, gitfaber) => {
        if(err){
            return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })    
    })
})

app.get('/api/gitfabers/profile/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    GitFaberModel.updateOne({ email: req.query.gitfaberemail },
        {
            name: req.query.newname,
            publicEmail: req.query.newpublicemail,
            bio: req.query.newbio,
            url: req.query.newurl,
            twitter: req.query.newtwitter,
            company: req.query.newcompany,
            location: req.query.newlocation,
        }, (err, gitfaber) => {
            if(err){
                return res.json({ status: 'Error' })        
            }
            return res.json({ status: 'OK' })    
    })
})

app.get('/api/gitfabers/keepmyemailaddressesprivate/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    GitFaberModel.updateOne({ email: req.query.gitfaberemail },
        {
            keepMyEmailAddressesPrivate: req.query.newkeepmyemailaddressesprivate,
        }, (err, gitfaber) => {
            if(err){
                return res.json({ status: 'Error' })        
            }
            return res.json({ status: 'OK' })
    })
})

app.get('/api/gitfabers/blockcommandlinepushesthatexposemyemail/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    GitFaberModel.updateOne({ email: req.query.gitfaberemail },
        {
            blockCommandLinePushesThatExposeMyEmail: req.query.newblockcommandlinepushesthatexposemyemail,
        }, (err, gitfaber) => {
            if(err){
                return res.json({ status: 'Error' })        
            }
            return res.json({ status: 'OK' })
    })
})

app.get('/api/gitfabers/dependencygraph/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    GitFaberModel.updateOne({ email: req.query.gitfaberemail },
        {
            dependencyGraph: req.query.newdependencygraph,
        }, (err, gitfaber) => {
            if(err){
                return res.json({ status: 'Error' })        
            }
            return res.json({ status: 'OK' })
    })
})

app.get('/api/gitfabers/dependabotalerts/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    GitFaberModel.updateOne({ email: req.query.gitfaberemail },
        {
            dependabotAlerts: req.query.newdependabotalerts,
        }, (err, gitfaber) => {
            if(err){
                return res.json({ status: 'Error' })        
            }
            return res.json({ status: 'OK' })
    })
})

app.get('/api/gitfabers/dependabotsecurityupdates/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    GitFaberModel.updateOne({ email: req.query.gitfaberemail },
        {
            dependabotSecurityUpdates: req.query.newdependabotsecurityupdates,
        }, (err, gitfaber) => {
            if(err){
                return res.json({ status: 'Error' })        
            }
            return res.json({ status: 'OK' })
    })
})

app.get('/api/gitfabers/billing/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    GitFaberModel.updateOne({ email: req.query.gitfaberemail },
        {
            billing: req.query.newbilling,
        }, (err, gitfaber) => {
            if(err){
                return res.json({ status: 'Error' })        
            }
            return res.json({ status: 'OK' })
    })
})

app.get('/api/gitfabers/emails/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    GitFaberModel.updateOne({ email: req.query.gitfaberemail },
        { $push: 
            {
                emails: [
                    {
                        email: req.query.newemail
                    }
                ]
                
            }
    }, (err, repo) => {
        if(err){
            return res.json({ "status": "error" })
        } else {
            return res.json({ "status": "OK" })
        }
    })
})

app.get('/api/gitfabers/keys/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    GitFaberModel.updateOne({ email: req.query.gitfaberemail },
        { $push: 
            {
                keys: [
                    {
                        keyType: req.query.newkeytype,
                        keyTitle: req.query.newkeytitle,
                        key: req.query.newkey,
                    }
                ]
                
            }
    }, (err, repo) => {
        if(err){
            return res.json({ "status": "error" })
        } else {
            return res.json({ "status": "OK" })
        }
    })
})

app.get('/api/gitfabers/password/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let query =  GitFaberModel.findOne({ 'email': req.query.gitfaberemail}, function(err, gitfaber){
        if (err || !bcrypt.compareSync(req.query.gitfaberoldpassword, gitfaber.password)){
            return res.json({ "status": "Error" })
        } else {
            let encodedPassword = "#"
            let salt = bcrypt.genSalt(saltRounds)
            encodedPassword = bcrypt.hashSync(req.query.gitfabernewpassword, saltRounds)
            GitFaberModel.updateOne({ email: req.query.gitfaberemail }, { password: encodedPassword }, (err, gitfaber) => {
                if(err){
                    return res.json({ status: 'Error' })        
                }
                return res.json({ status: 'OK' })    
            })
        }
    })
})

app.get('**', (req, res) => { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    return res.redirect(`http://localhost:4000`)
    // return res.redirect(`https://gitfabric.herokuapp.com/`)

})

// const port = process.env.PORT || 8080
const port = 4000
app.listen(port)