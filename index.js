var app = require('express')();
var http = require('http').createServer(app);
var io = require("socket.io")(http)


app.get("/", (req , res) => {
   res.sendFile(__dirname + "/index.html")
})
// Socket Connection as well as disconnection

// io.on('connection', (socket) => {
//     console.log("User Connected");
//     socket.on('disconnect', () => {
//         console.log("user disconnected")
//     })
// })
io.on('connection' , (socket) => {
    socket.on('chat messages', (msg) => {
       io.emit('chat messages', msg)
    })
})


http.listen(8000 , () => {
    console.log("Active on 8000");
} )