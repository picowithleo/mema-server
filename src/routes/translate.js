const express = require('express');

const router = express.Router();

var translate = require('../models/translate');


async function getUser(req, res) {
    const { id } = req.params;
    const user = await translate.findById(id);
    if (!user) {
        return res.sendStatus(404);
    }
    return res.json(user);
  }

  async function getAllUsers(req, res) {
    // res.json("hello");
    const users = await translate.find();
    return res.json(users);
}


router.post('', (req, res) => {
    translate.create({
        English:'food',
        French: 'ff',
        Chinese:'食物',
        Pinyin:'shiwu',
        Italy:'aa',
        Korea:'ee',
        Germany:'11',
        Japanese:'12'
    },function(err,doc){
        if(!err){
            console.log(doc);
            
        }else{
            console.log(err);
            
        }
    });
    res.json ({
        message: '录入成功'
    })
}
)

router.get('/:id', getUser);
router.get("", getAllUsers);

module.exports = router;