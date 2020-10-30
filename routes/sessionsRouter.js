const express = require("express");
const passport = require("passport");
const sessionsService = require("../services/sessionsService");

const sessionsRouter = express.Router();

sessionsRouter.post("/", passport.authenticate("local"), sessionsService.post);

module.exports = sessionsRouter;
