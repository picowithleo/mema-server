

const postModel = require("../models/post");


function addPost(req, res) {
    const { author, content } = req.body;
    // validate author, content
    const newPost = postModel.addPost({ author, content });
    return res.status(201).json(newPost);
}

function getPostById(req, res) {
    const { id } = req.params;
    const post = postModel.getPostById(id);
    return res.json(post);
}

function getAllPost(req, res) {
    const posts = postModel.getAllPost();
    return res.json(posts);
}

function updatePostById(req, res) {
    const { id } = req.params;
    const { author, content } = req.body;
    const updatePost = postModel.updatePostById(id, { author, content });
    return res.json(updatePost);
}

function deletePostById(req, res) {
    const { id } = req.params;
    const deletePost = postModel.deletePostById(id);
    return res.json(deletePost);
}

module.exports = {
    addPost,
    getAllPost,
    getPostById,
    updatePostById,
    deletePostById
};
