const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const userModel = require("../models/usersModel");

function initialize(passport) {
  const authenticateUser = async (email, password, done) => {
    console.log("AUTHENTICATE");

    const user = await userModel.getUserByEmail(email);

    console.log("got user");

    if (user == null) {
      return done(null, false, { message: "No user with that email" });
    }

    console.log("USER");
    console.log(user);
    console.log(user.password);

    try {
      if (await bcrypt.compare(password, user.password)) {
        console.log("correct password");
        return done(null.user);
      } else {
        console.log("incorrect password");
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      console.log("server error");
      return done(e);
    }
  };

  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    return done(null, userModel.getUserByID(id)); // TODO should this be async?
  });
}

module.exports = initialize;
