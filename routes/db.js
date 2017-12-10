
var express = require('express');
var router = express.Router();
const db = require('../src/db/db');
const ObjectId = require('mongodb').ObjectID;

router.get('/', function(req, res) {
    db.read({}, {}, 0)
        .then((db) => {
            res.render('db', {
                title: 'DB',
                database: db
            });
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get('/setup', (req, res) => {
    db.setup()
        .then(() => {
            res.redirect('/db');
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get('/create/:name&:city&:country&:id', (req, res) => {
    console.log("we are here");
    let id = req.params.id !== 'null' ? {_id: ObjectId(req.params.id)} : {name: ''};
    let newObject = {
        namn: req.params.name,
        bor: req.params.city,
        land: req.params.country
    };

    db.create(id, newObject)
        .then(() => {
            res.redirect('/db');
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get('/delete/:id', (req, res) => {
    db.delete({_id: ObjectId(req.params.id)})
        .then(() => {
            res.redirect('/db');
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;
