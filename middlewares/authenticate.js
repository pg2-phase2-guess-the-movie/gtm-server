const {Player} = require('../models')

const autenticate = (req,res,next)=>{
    try {
        const name = req.headers.name

        Player.findOne({
            where: {
                name
            }
        })
            .then(player => {
                req.decoded = {name: player.name}
                next()
            })
            .catch(err => {
                console.log(err);
            })
    } catch (error) {
        throw({name:"InvalidToken", msg:"Invalid Token"})
    }
}

module.exports = autenticate