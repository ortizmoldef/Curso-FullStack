const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200,{'content-Type': 'text/plain'})
    res.write('Hola, Mundo')
    res.end()
})

server.listen(3001, () =>{
    console.log('Servidor iniciado en el puerto 3001')
})