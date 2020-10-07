

const User = require('../models/user');

async function addUser(req, res) {
    const user = new User({
        email: "1233@test.com",
        password: "123abc",
        username: "banana",
        country: "Australia",
        language: "English",
        proficiencyLevel: "Level 1",
        avatar: "man.png"
    })
    await user.save();
    return res.json(user);
}

async function getUser(req, res) {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
      return res.status(404).send();
  }
  return res.json(user);
}

async function getAllUsers(req, res) {
    // res.json("hello");
    const users = await User.find();
    return res.json(users);
}

async function updateUser(req, res) {
    const { id } = req.params;
    const { 
        email,
        password,
        username,
        country,
        language,
        proficiencyLevel,
        avatar
    } = req.body;
    const user = await User.findByIdAndUpdate(
        id, 
        {
            email,
            password,
            username,
            country,
            language,
            proficiencyLevel,
            avatar
        }, 
        {
            new: true
        }
        );
    if (!user) {
        return res.status(404).send();
    }
    return res.json(user);
}

async function deleteUser(req, res) {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
        return res.status(404).send();
    }
    return res.json();
}

module.exports = {
    addUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
};