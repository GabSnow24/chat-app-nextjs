import { TextField } from "@material-ui/core"
import { NextPage } from "next"
import { useEffect, useState } from "react"
import { enviar } from "./svg"

interface ChatProps {
    imagem: any
    texto: any
}

const gabriel = [{ mensagem: "menssagem 1 ", hora: "12:24" }, { mensagem: "menssagem 2 ", hora: "12:25" }] as any

const Chat: NextPage<ChatProps, any> = (props) => {


    const [size, setSize] = useState(1)
    const [row, setRow] = useState(1)
    const showArea = () => {
        const textarea = document.querySelector("textarea")
        textarea.addEventListener("keydown", async (e) => {
            if (e.key == "Backspace") {
                if (size > 1) {
                    setSize(size - 1)
                    console.log(size)
                }
                if (size == 33 || size == 65 || size == 97 || size == 129) {
                    setRow(row - 1)
                    console.log(row)
                }
            }
            else {
                setSize(size + 1)
                console.log(size)
                if (size == 31 || size == 63 || size == 95 || size == 127) {
                    setRow(row + 1)
                }
            }
        })
    }


    const send = (event) => {

    }
    return (
        <main className="min-h-screen justify-center bg-white" >
            <nav className="bg-gradient-to-r flex from-blue-500 to-indigo-800 w-full h-12 absolute inset-x-0 top-0" >
                <img src={props.imagem} className="h-10 w-10 ml-2 mt-1 rounded-full"></img>
                <p className="my-auto ml-2 text-white text-lg">{props.texto}</p>
            </nav>
            <div className="bg-gradient-to-r from-gray-300 to-blue-400 max-h-full absolute top-12 inset-0">
                {gabriel.map(
                    (mensagem: any) => {
                        return (
                            <div className="text-right mr-2 border border-gray-500 bg-white m-2">
                                <p>{mensagem.mensagem}</p>
                            </div>
                        )
                    }
                )}
            </div>
            <div className="border-black absolute bg-blue-500 inset-x-0 bottom-0 h-auto p-2">
                <form className="flex space-x-4 h-auto ">
                    <textarea placeholder="Envie sua mensagem..."
                        className="w-full pl-5 pr-5 focus:outline-none text-md my-auto rounded-md"
                        wrap="hard"
                        rows={row}
                        cols="20"
                        onChange={showArea}

                    >

                    </textarea>

                    <button className="my-auto" onClick={send} >{enviar}</button>
                </form>

            </div>
        </main>
    )
}

export default Chat