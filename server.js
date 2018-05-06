const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
var app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(req.body);
    if (req.body.token === process.env.GSUITE_TOKEN) {
        next();
    } else {
        res.status(401).send("Incorrect TOKEN provided, access denied");
    }
})
try {

    // Handle post
    app.post('/helpBot', (req, res) => {
        axios.post('https://us-central1-uplifted-elixir-203119.cloudfunctions.net/helpBot', req.body).then(r => {
            try {
                console.log(r);
                res.send(r)
            } catch (e) {
                console.log("Caught error", r.data)
                res.send(r.data);
            }
        });

    });

} catch (err) {
    console.log("Error Ocurred")
    console.log(err);
}