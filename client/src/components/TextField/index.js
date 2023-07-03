import React, {useState} from 'react';
import {SendIcon} from "../../icons";
import "./index.css"

const TextField = ({setQuestion, sendChat}) => {

    const [state, setState] = useState("");

    return (
        <div className={"text-field"}>
            <input onChange={(event) => setState(event.target.value)}/>
            <SendIcon onClick={() => {
                setQuestion(state)
                sendChat(state)
            }
            }/>
        </div>
    );
};

export default TextField;