const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_KEY);
    console.log(verified);
    if (verified.role !== "admin") {
      return res.status(401).send("Access Denied");
    }
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
  return next();
};
