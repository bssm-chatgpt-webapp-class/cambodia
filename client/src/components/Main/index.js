import React from 'react';
import "./index.css"
import {chatResponse, imageIcon} from "../../fixtures";
import ChatItem from "../ChatItem";

const Main = ({chatMessages}) => {

    return (
        <div className="main">
            {chatMessages.map((chatMessage) => {
                return <ChatItem
                    imageLink={chatMessage.isMine ? imageIcon : "/images/gptjpg.png"}
                    text={chatMessage.message}
                />

            })}
        </div>

    );
};

export default Main;