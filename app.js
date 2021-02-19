if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require("express")
const router = require("./routes/index")
const error = require("./middlewares/errorhandler")

const PORT = process.env.PORT || 3000
const cors = require("cors")

const app = express()
const http = require("http").Server(app)
const io = require("socket.io")(http, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"],
        credentials: true
    },
    allowEIO3: true
})
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

io.on('connection', (socket) =>{
    console.log('concected--------');

    socket.on('login', (data) => {
        console.log('dri client', data);
        io.emit("user", data)
    })
})

app.use(router)
app.use(error)

http.listen(PORT,()=>{
    console.log(`Tebak Movie App Listen at PORT ${PORT}`);
})