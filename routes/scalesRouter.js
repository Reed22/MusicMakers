const express = require("express");
const scalesRouter = express.Router();
const db = require('../models/db')

// Create scale
scalesRouter.post("/", function (req, res, next) {
    if(req.user){
        const querystring = 'INSERT INTO Scales (name, user_id) VALUES (?,?)'
        const parameters = [req.body.name, req.user.user_id]
        db.pool.query(querystring, parameters, function(err, rows, fields){
            if(err) {
                console.log(err)
                return
            }
            //Insert checked values in Scales_Notes 
            res.status(201).send("Created succesful");
            return
        });
    }
    else res.status(400).end()
});


module.exports = scalesRouter;