const router = require("express").Router()
const authenticate = require("../middlewares/authenticate")
const PlayerController = require("../controllers/PlayerController")

router.post("/login", PlayerController.newPlayer)
router.use(authenticate)

module.exports = router