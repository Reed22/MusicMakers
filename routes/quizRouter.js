const express = require("express");
const db = require('../models/db')
const moment = require('moment');
const { resetWarningCache } = require("prop-types");

const quizRouter = express.Router();

quizRouter.post('/', function(req, res, next){
    if(req.user){
        const score_percentage = (req.body.score * 10) + '%'
        const queryString = 'INSERT INTO Quizzes (quiz_type, score, created_at, user_id) VALUES (?,?,?,?)'
        const params = [req.body.type, score_percentage, moment().format('MMMM Do YYYY, h:mm:ss a'), req.user.user_id]
        db.pool.query(queryString, params, function(err, rows, fields){
            if(err) {
                console.log(err)
                return
            }
            res.status(201).send("Successfully posted quiz score")
        })
    }
    else 
        res.status(403).send("Not logged in")
})

quizRouter.get('/', function(req, res, next){
    const queryString = 'SELECT quiz_type, score, created_at FROM Quizzes WHERE user_id = ?'
    db.pool.query(queryString, req.user.user_id, function(err, rows, fields){
        console.log(rows)
        res.status(200).send(rows)
    })
})

module.exports = quizRouter;
