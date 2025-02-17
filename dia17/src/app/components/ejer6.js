'use client'
import { useState, useRef, useEffect } from "react";

function ChatEnVivo() {
    const [messages, setMessages] = useState([]); 
    const [newMessage, setNewMessage] = useState(""); 
    const chatEndRef = useRef(null); 

    const sendMessage = () => {
        if (newMessage.trim() === "") return;
        setMessages([...messages, newMessage]); 
        setNewMessage(""); 
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); 
            sendMessage();
        }
    };

    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView();
        }
    }, [messages]);

    return (
        <div
            style={{
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                height: "100vh", 
                flexDirection: "column"
            }}
        >
            <div
                style={{
                    height: "300px", 
                    width: "300px", 
                    overflowY: "auto", 
                    border: "1px solid #ccc", 
                    padding: "10px", 
                    marginBottom: "10px"
                }}
            >
                {messages.map((msg, index) => (
                    <div key={index}>
                        <p>{msg}</p>
                    </div>
                ))}
                <div ref={chatEndRef}></div>
            </div>

            <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
                <input 
                    type="text" 
                    value={newMessage} 
                    onChange={(e) => setNewMessage(e.target.value)} 
                    onKeyDown={handleKeyDown}  
                    placeholder="Escribe un mensaje..." 
                    style={{ width: "170px", padding: "5px", border: "1px solid" }} 
                />
                <button onClick={sendMessage} style={{ padding: "5px", border: "1px solid" }}>
                    Enviar
                </button>
            </div>
        </div>
    );
}

export default ChatEnVivo;
