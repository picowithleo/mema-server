

const User = require('../models/user');

async function addUser(req, res) {
    const { 
        email,
        password,
        username,
        country,
        language,
        proficiencyLevel,
        avatar
    } = req.body;
    const user = new User({
        email,
        password,
        username,
        country,
        language,
        proficiencyLevel,
        avatar
    });
   
    await user.save(); 
    return res.json(user);
}

async function getUser(req, res) {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
      return res.sendStatus(404);
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

    const newUser = await User.findByIdAndUpdate(
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
    if (!newUser) {
        return res.sendStatus(404);
    }
    return res.json(newUser);
}

async function deleteUser(req, res) {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
        return res.sendStatus(404);
    }
    return res.sendStatus(200);
}

// async function addAuth(req, res) {
//     // 1. get id
//     const { id, userId } = req.params;
//     // get document
//     const auth = await Auth.findById(userId);
//     const user = await User.findById(id);
//     if (!Auth || !user) {
//         return res.status(404).json("user not found");
//     }
//     // return success
//     user.authority.addToSet(auth.id);
//     await user.save();
//     return res.json(user);
// }

module.exports = {
    addUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
    // ,
    // addAuth
};