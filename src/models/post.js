const posts = [];
let currentId = 1;


function getAllPost() {
    return JSON.parse(JSON.stringify(posts));
}

function addPost(post) {
    const newPost = { ...post, id: currentId++ };
    posts.push(newPost);
    return newPost;
}

function getPostById(id) {
    return posts.find(i => i.id === id);
}

function updatePostById(id, newPost) {
    const postIndex = getPostIndexById(id);
    const updatePost = { ...newPost, id };
    posts[postIndex] = updatePost;
    return updatePost;
}

function deletePostById(id) {
    const postIndex = getPostIndexById(id);
    const deletedPost = posts.splice(postIndex, 1);
    return deletedPost;
}

function getPostIndexById(id) {
    return posts.findIndex(i => i.id === id);
}

function doesIdExist(id) {
    return getPostIndexById(id) !== -1;
}

module.exports = {
    getAllPost,
    getPostById,
    updatePostById,
    deletePostById,
    addPost,
    doesIdExist
};

