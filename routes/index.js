const express = require("express");

const router = express.Router();
const usersRouter = require("./usersRouter");
const sessionsRouter = require("./sessionsRouter");
const scalesRouter = require("./scalesRouter");

router.use("/users", usersRouter);
router.use("/sessions", sessionsRouter);
router.use("/scales", scalesRouter)
module.exports = router;
