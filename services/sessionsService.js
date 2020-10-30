const post = async (req, res, next) => {
  try {
    console.log("post sesssion");
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  post,
};
