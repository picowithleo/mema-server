

const { Router } = require("express");

const validateId = require("../middleware/validateId");

const express = require("express");

const {
    addPost,
    getAllPost,
    getPostById,
    updatePostById,
    deletePostById
} = require("../controllers/posts");

const router = express.Router();

router.get("", getAllPost);

router.get("/:id", validateId, getPostById);

router.post("", addPost);

router.put("/:id", validateId, updatePostById);

router.delete("/:id", validateId, deletePostById);

module.exports = router;



