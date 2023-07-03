import React from 'react';
import "./index.css"
import {imageIcon} from "../../fixtures";

const ChatItem = ({imageLink, text}) => {
    return (
            <div className="chat-item">
                <img width="30" height={"30"} style={{objectFit: "cover"}} src={imageLink} />
                <pre>{text}</pre>
            </div>
    );
};

export default ChatItem;