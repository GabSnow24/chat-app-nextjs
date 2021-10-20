
const cors = require('cors')

const api = async () =>{

const app = require('express')()

app.use(cors({origin:"*"}))

const http = require('http').Server(app)
const io = require('socket.io')(http, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
      }
    
})

io.on('connection', (socket) =>{
    console.log(`[IO] - rodando 💓 ${socket.id}`)
    
    socket.on('msggo', (data)=>{

        console.log(data)

        console.log('teste funcionou')

        socket.emit('msgcome',(data))
    })
})



http.listen(3003, ()=>{
    console.log('[HTTP] - rodando na 3003 bro 💟')
})
}

export default api