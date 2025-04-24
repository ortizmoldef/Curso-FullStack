import React, { useState, useEffect} from 'react'

function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [user, setUser] = useState('Mario-' + getRandomInt(9999));
    const [ws, setWs] = useState(null);

    useEffect(() => {

        const socket = new WebSocket('ws://192.168.1.39:8080');
        socket.onopen = () => console.log('conectando al WebSocket')
        socket.onmessage = (event) => {
            console.log(event)
            setMessages((prevMessages) => [...prevMessages, JSON.parse(event.data)])
        }

        setWs(socket)
        return () => socket.close()
    }, [])

    const sendMessage = (e) => {
        e.preventDefault()
        if (ws && message-trim()){
            ws.send(JSON.stringify({
                message: message,
                user:user
            }))
            setMessage('')
        }
    }

    return(
        <div>
            <h2>Chat WebSocket</h2>
            <input
                type='text'
                className='left'
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder='Escribe tu nombre'
            />
            <div className='chat'>
                {messages.map((msg,index)=> {
                    <div key={index}><b>{msg.user}:</b>{msg.message}</div>
                })}
            </div>
            <form onSubmit={sendMessage}>
            <input
                type='text'
                className='input'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Escribe un mensaje'
            />
            <button>-&gt;</button>
            </form>
        </div>
    )
}

export default Chat