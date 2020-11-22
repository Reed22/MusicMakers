const express = require("express");
const scalesRouter = express.Router();
const db = require('../models/db')
const moment = require('moment')

// Create scale
scalesRouter.post("/", function (req, res, next) {
    //Only post if a user is logged in.
    if(req.user){
        const querystring = 'INSERT INTO Scales (name, user_id, created_at) VALUES (?,?,?)'
        const parameters = [req.body.name, req.user.user_id, moment().format('MMMM Do YYYY, h:mm:ss a')]
        db.pool.query(querystring, parameters, function(err, rows, fields){
            if(err) {
                console.log(err)
                return
            }
            const {insertId} = rows
            const sorted_checked = req.body.checked.sort()

            //Insert into Scales_Notes every note selected
            sorted_checked.forEach(note => {
                const qstring = 'INSERT INTO Scales_Notes (scale_id, note_id) VALUES (?, (SELECT note_id FROM Notes WHERE note = ? AND octave = ?))'
                const params = [insertId, note.substring(1), note.substring(0,1)]
                db.pool.query(qstring, params, function(err, rows, fields){
                    if(err){
                        console.log(err)
                        return
                    }
                })
            });
            res.status(201).json({"name": req.body.name, "user_id": req.user.user_id});
            return
        });
    } 
    else res.status(403).end()
});

//Get User's scales
scalesRouter.get("/", function(req, res, next){
    console.log(req.user.user_id)
    if(req.user){
        const queryString = "SELECT Scales.name, Scales.created_at, Notes.note, Notes.priority, Notes.octave " +  
                            "FROM Scales JOIN Scales_Notes ON Scales.scale_id = Scales_Notes.scale_id " +
                            "JOIN Notes ON Scales_Notes.note_id = Notes.note_id " +
                            "WHERE Scales.user_id = ?"
        db.pool.query(queryString, req.user.user_id, function(err, rows, fields){
            if(err){
                console.log(err)
                return
            }
            res.status(200).json(rows)
        });
    }
    else res.status(403).json({"error": "Not Logged In"})
});


module.exports = scalesRouter;