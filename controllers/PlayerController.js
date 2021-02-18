const {Player} = require("../models/index")

class PlayerController{
    static newPlayer(req,res,next){
        const {name} = req.body
        Player.create({
            name,
            score: 0
        })
         .then((newPlayer)=>{
            res.status(201).json({newPlayer})
         })
         .catch((err)=>{
            next(err)
         })
    }
}

module.exports = PlayerController