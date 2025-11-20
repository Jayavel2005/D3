import React, { useEffect, useState } from 'react'
import './App.css'
import io from "socket.io-client";
import Input from './components/Input';
const socket = io("http://localhost:3000");
const App = () => {

  const [scores, setScores] = useState({});
  const [result, setResult] = useState("");


  function connectSocket(){
    socket.on("connect",(socket)=>{
      console.log(socket);
      
    })
  }

  useEffect(()=>{
    connectSocket();
    receiveScores();
  },[]);

  function handleInputChange(e){
    let {name, value} = e.target;
    setScores({...scores, [name]: value});
  }

  function sendScores(){
    socket.emit("send_scores", scores);
  }
  function receiveScores(){
    socket.on("receive_scores", (data)=>{
      if(data){
        if(data.score > 50) setResult("Pass");
        else setResult("Fail");
      }
    })
  }


  

  return (
    <>
      <h1>Socket.IO Chat</h1>
     <p>{JSON.stringify(scores)}</p>
      <Input placeholder="Enter your name.." name="name" handleInputChange={handleInputChange} type="text"/>
      <Input placeholder="Enter your score" name="score" handleInputChange={handleInputChange} type="number" />
      <p>Result: {result}</p>
      <button onClick={sendScores}>Send Scores</button>
    </>
  )
}

export default App