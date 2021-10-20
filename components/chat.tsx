import axios from 'axios'
import { NextPage } from "next"
import { useEffect, useState, } from "react"
import { enviar } from "./svg"
import io from 'socket.io-client'

const socket = io('http://localhost:3003') 
socket.on('connect', ()=> console.log(`[IO] Usuário conectado 💓`))
 
interface ChatProps {
    imagem: any
    texto: any
    id: any
}



const Chat: NextPage<ChatProps, any> = (props) => {
    
    useEffect( 
        ()=>{
            async function api() {
                const response = await axios.get('http://localhost:3000/api/socket')
                
            }

            
            api()
            
        }
    )

    const [size, setSize] = useState(1)
    const [row, setRow] = useState(1)
    const [msg, setMsg] = useState("")
    const [msgs, setMsgs] = useState([])
    
    // const showArea = () => {
    //     const textarea = document.querySelector("textarea")
    //     textarea.addEventListener("keydown", async (e) => {
    //         if (e.key == "Backspace") {
    //             if (size > 1) {
    //                 setSize(size - 1)
    //             }
    //             if (size == 33 || size == 65 || size == 97 || size == 129) {
    //                 setRow(row - 1)
    //             }
    //         }
    //         else {
    //             setSize(size + 1)
    //             if (size == 31 || size == 63 || size == 95 || size == 127) {
    //                 setRow(row + 1)
    //             }
    //         }
    //     })
    // }

    socket.on('msgcome', (data)=>{
        console.log(data)
        setMsgs([...msgs, {
            mensagem:data.mensagem,
            hora:data.hora,
            id:data.id
        }])

        socket.off('msgcome')

    })

    const handleChange = async (event:any) =>{
       await setMsg(event.target.value)
       console.log(msg)
    }

    const handleSubmit = async (event:any) =>{
        const hora = new Date()
        event.preventDefault()
        if(msg.trim()){
            const data_to_send = {
                mensagem: msg,
                hora: hora.getTime(),
                id: props.id,
            }
            
            socket.emit('msggo',  data_to_send)

            setMsg("")
            

            
        }
    }

    return (
        <main className="min-h-screen relative justify-center bg-white" >
            <nav className="bg-gradient-to-r flex from-blue-500 to-indigo-800 w-full h-12 absolute inset-x-0 top-0" >
                <img src={props.imagem} className="h-10 w-10 ml-2 mt-1 rounded-full"></img>
                <p className="my-auto ml-2 text-white text-lg">{props.texto}</p>
            </nav>
            <div className="bg-gradient-to-r from-gray-300 overflow-y-auto to-blue-400 max-h-full absolute top-12 inset-0">
                {msgs.map(
                    (mensagem: any, index:any) => {
                        if (mensagem.id == props.id)
                            return (
                                <div className="text-center mr-2 border-none bg-blue-500 ml-52 shadow-2xl shadow-inner rounded-lg pt-2  h-auto w-auto text-white m-2" key={index}>
                                    <p >{mensagem.mensagem}</p> 
                                    <p className="text-right mr-2 text-xs">{mensagem.hora}</p>
                                </div>
                            )
                        if (mensagem.id != props.id)
                            return (
                                <div className="text-center mr-2 rounded-lg pt-2   shadow-2xl shadow-inner h-auto w-auto border-none bg-blue-700 text-white m-2" key={index}>
                                    <p>{mensagem.mensagem}</p>
                                    <p className="text-right mr-2 text-xs">{mensagem.hora}</p>
                                </div>
                            )


                    }
                )}
            </div>
            <div className="border-black absolute bg-gradient-to-r from-blue-500 to-indigo-800 inset-x-0 bottom-0 h-auto p-2">
                <form className="flex space-x-4 h-auto " onSubmit={handleSubmit}>
                    <textarea placeholder="Envie sua mensagem..."
                        className="w-full pl-5 pr-5 focus:outline-none text-md my-auto rounded-md"
                        wrap="hard"
                        rows={row}
                        cols={20}
                        onChange={handleChange}
                        value={msg}
                    >

                    </textarea>
                    <button className="my-auto" >{enviar}</button>
                </form>

            </div>
        </main>
    )
}

export default Chat