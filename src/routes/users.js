const express = require("express");
const router = express.Router();
const { 
    addUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
    // ,
    // addAuth
} = require('../controllers/users');

router.get("", getUser);

router.get("/:id", getUser);

router.post("", updateUser);

router.put("", updateUser);

router.delete("/:id", deleteUser);

// router.post("/:id/auth/:userId", addAuth);


module.exports = router;