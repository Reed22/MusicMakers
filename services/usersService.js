const bcrypt = require("bcrypt");
const usersModel = require("../models/usersModel");

const post = async (req, res, next) => {
  // TODO validate req body

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const dbRes = usersModel.post({
      email: req.body.email,
      password: hashedPassword,
    });

    console.log(dbRes); // TODO remove
    res.status(200).end(); // TODO status code
  } catch (e) {
    res.status(400).end(); // TODO status code
  }

  // TODO send email
};

module.exports = {
  post,
};
