const express = require("express")

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

let users = []
let quiz = require("./movie-emoji.json")
io.on('connection', (socket) =>{
    console.log('concected--------');

    socket.on('login', (data) => {
        let obj = {
            name: data.name,
            score: 0
        }
        users.push(obj)
        io.emit("user", users)
    })

    socket.on('logout', (data) => {
        let updatedUsers = []
        users.forEach(user => {
            if (user.name !== data.name) {
                updatedUsers.push(user)
            }
        });
        users = updatedUsers
        io.emit("user", users)
    })

    socket.on('start', (index) => {
        io.emit("question", quiz[index])
    })

    socket.on('setScore', (updatedUser) => {
        users = updatedUser
        io.emit("user", users)
    })
})

http.listen(PORT,()=>{
    console.log(`Tebak Movie App Listen at PORT ${PORT}`);
})