

const Auth = require('../models/auth');
const { generateToken } = require('../utils/jwt');

async function addAuth(req, res) {
    const { 
        email,
        password
    } = req.body;

    const existingUser = await Auth.findOne({ email }).exec();
    if (existingUser) {
        return res.status(400).json('User already exist');
    }

    const auth = new Auth({
        email,
        password
    });

    await auth.hashPassword();
    await auth.save(); 
    const token = generateToken(auth._id);
    return res.json({ email, token });
}


module.exports = {
    addAuth
};