const express = require("express");
const router = express.Router();
const { 
    addUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser 
} = require('../controllers/users');

router.get("", getAllUsers);

router.get("/:id", getUser);

router.post("", addUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);


module.exports = router;