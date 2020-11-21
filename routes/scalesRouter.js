const express = require("express");
const scalesRouter = express.Router();

// Create scale
scalesRouter.post("/", function (req, res, next) {
    //console.log(req.session)
    console.log(req.user)

    res.end()
});

scalesRouter.get("/", function(req, res, next){
    res.send("jet")
})

module.exports = scalesRouter;