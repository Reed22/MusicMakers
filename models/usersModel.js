const db = require("./db");

const getUserByEmail = async (email) => {
  const res = await db.pool.asyncQuery("SELECT * FROM Users WHERE email = ?", [
    email,
  ]);
  console.log("get user by email");
  return res[0];
};

const getUserByID = async (id) => {
  console.log("get user by id");

  const res = await db.pool.asyncQuery("SELECT * FROM Users WHERE id = ?", [
    id,
  ]);

  console.log("get user by id");
  console.log(res[0]);

  return res[0];
};

const post = async (data) => {
  // TODO check for uniq email

  const insertRes = await db.pool.asyncQuery(
    "INSERT INTO Users(email, password, created_at, updated_at) VALUES (?, ?, ?, ?)",
    [
      data.email,
      data.password,
      new Date().toISOString().replace("T", " ").replace("Z", " "),
      new Date().toISOString().replace("T", " ").replace("Z", " "),
    ]
  );
  return insertRes;
};

module.exports = {
  post,
  getUserByEmail,
  getUserByID,
};
