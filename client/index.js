const socket = io("http://localhost:3000");


socket.emit("message", "I am jayavel")

socket.on("message", (data)=>{
    console.log(data);
});

