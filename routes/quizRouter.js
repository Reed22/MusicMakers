const express = require("express");

const quizRouter = express.Router();

quizRouter.post('/', function(req, res, next){
    console.log(req.body)
    console.log(req.user.user_id)
    res.status(200).end()
})

module.exports = quizRouter;
