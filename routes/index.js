const express = require("express");

const router = express.Router();
const usersRouter = require("./usersRouter");
const sessionsRouter = require("./sessionsRouter");

router.use("/users", usersRouter);
router.use("/sessions", sessionsRouter);

module.exports = router;
