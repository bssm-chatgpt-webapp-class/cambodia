import React from 'react';
import "./style.css"
import {imageIcon} from "../../fixtures";

const ChatItem = ({imageLink, text}) => {
    return (
        <div>
            <div className="question">
                <img width="30" height={"30"} style={{objectFit: "cover"}} src={imageLink} />
                <div>{text}</div>
            </div>
        </div>
    );
};

export default ChatItem;