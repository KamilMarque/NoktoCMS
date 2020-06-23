const cors = require('cors');
const express = require('express');
const config = require('./config');
const app = express();
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const port = 4000;
const router = express.Router();
let session = require('express-session')

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(session({
    secret: 'aazeazeeaz',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

app.get('/infos', (req, res) => { 
    const infos = ['hello', 'hi']
    res.send(infos);
})

app.post('/login', (req, res) => {
    user = req.body.user.mail
    password = req.body.user.password
    console.log(user, password);
    if (!user || !password) {
        console.log('ds');
        return res.status(400).send({error: true, message : 'Adresse mail ou mot de passe incorrect'})
    } else {
        let token = jwt.sign({ id: 848484 }, config.secret, { expiresIn: 86400 // expires in 24 hours
        });
        return res.status(200).send({auth: true, token: token, user: user});
    }
})


app.listen(port, () => {
    console.log('server running');
})