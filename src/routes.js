

const express = require("express");
const router = express.Router();

const postsRoute = require("./routes/posts");
const userRoute = require("./routes/users.js");
const authsRoute = require("./routes/auths.js");
const authRoute = require("./routes/auth.js");
const translateRoute = require("./routes/translate.js")
const authGuard = require("./middleware/authGuard");

router.use("/users", authGuard, userRoute);
router.use("/posts", authGuard, postsRoute);
router.use("/auths", authsRoute);
router.use("/auth", authRoute);
router.use("/translate", translateRoute);

module.exports = router;