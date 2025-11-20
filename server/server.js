import http from "http";
import {Server} from "socket.io";

const httpServer = http.createServer();
const io = new Server(httpServer,{
    cors : {
        origin : "http://localhost:5173",
    }
})


io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("send_scores", (scores) => {
        console.log("Received:", scores);

        // Just send it back to client
        socket.emit("receive_scores", scores);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});


httpServer.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});