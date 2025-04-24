const WebSocket = require('ws');

const wws = new WebSocket.WebSocketServer({port: 8080})

wws.on('connection', (ws) =>{
    console.log('Nuevo Cliente Conectado')
})

ws.on('message', (message) =>{
    console.log(message);
    const text = message.toString()
    const data = JSON.parse(text)
    console.log('Mensaje recibido:', data);
    ws.clients.array.forEach(client => {
        client.send(JSON.stringify({user: data.user, message: data.message}))
    }); 
})

ws.on('close', () =>{
    console.log('Cliente desconectado')
})

console.log('Servidor WebSocket corriendo en ws://localhost:8080')