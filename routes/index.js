const express = require("express");

const router = express.Router();
const usersRouter = require("./usersRouter");
const sessionsRouter = require("./sessionsRouter");
const quizRouter = require("./quizRouter")

router.use("/users", usersRouter);
router.use("/sessions", sessionsRouter);
router.use("/quizzes", quizRouter);

module.exports = router;
