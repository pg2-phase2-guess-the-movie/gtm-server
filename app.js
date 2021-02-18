if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require("express")
const router = require("./routes/index")
const error = require("./middlewares/errorhandler")

const PORT = process.env.PORT || 3000
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(router)
app.use(error)

app.listen(PORT,()=>{
    console.log(`Tebak Movie App Listen at PORT ${PORT}`);
})