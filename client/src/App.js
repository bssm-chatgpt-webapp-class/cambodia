import {Header, Main, TextField} from "./components";
import "./index.css"
import {useEffect, useState} from "react";
import {io} from "socket.io-client"

const socket = io("http://localhost:5001")


const App = () => {
    const [chatMessages, setChatMessages] = useState([
        {isMine: true, message: "hello"},
        {isMine: false, message: "other"}
    ]);
    const [question, setQuestion] = useState();

    useEffect(() => {
        socket.on("chat", (data) => {
            console.log("data : ", data)
            setChatMessages(s => [...s, {isMine:false , message:data}])
        })
    }, []);
    const sendChat = (message) => {
        socket.emit("chat", message)
        setChatMessages(s => [...s, {isMine:true , message:message}])
    }

    return (
        <div className="App">
            <Header/>
            <Main chatMessages={chatMessages}/>
            <TextField
                setQuestion={setQuestion}
                sendChat={sendChat}
            />
        </div>
    );
}

export default App;
