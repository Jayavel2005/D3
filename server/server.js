import http from "http"
import { Server } from "socket.io"

const httpServer = http.createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "http://127.0.0.1:5500"
    }
});

io.on("connection", (socket) => {

    socket.emit("message", "Hello from server")
    
    
    

    socket.on("message", (data) => {
        console.log(data);

        // broadcast to all connected clients
        io.emit("message", data);
    });

});

httpServer.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
