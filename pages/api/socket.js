import cors from 'cors'

const api = async () =>{
const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http, {
    cors: {
        origin: "https://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
      }
    
})

app.use(cors)
io.on('connection', (socket) =>{
    console.log('[IO] - rodando 💓')
})

http.listen(3003, ()=>{
    console.log('[HTTP] - rodando na 3003 bro 💟')
})
}

export default api