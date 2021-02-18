const autenticate = (req,res,next)=>{
    try {
        const {name} = req.headers
        req.decoded = {name}
        next()
    } catch (error) {
        throw({name:"InvalidToken", msg:"Invalid Token"})
    }
}

module.exports = autenticate