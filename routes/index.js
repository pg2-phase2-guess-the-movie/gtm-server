const router = require("express").Router()
const authenticate = require("../middlewares/authenticate")

router.post("/login", (req, res ,next) =>{
    console.log(masuk);
})
router.use(authenticate)

module.exports = router