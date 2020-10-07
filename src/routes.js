

const express = require("express");
const postsRoute = require("./routes/posts");
const router = express.Router();

const userRoute = require("./routes/users.js");

router.use("/users", userRoute);

router.use("/posts", postsRoute);

module.exports = router;