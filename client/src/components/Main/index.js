import React from 'react';
import "./index.css"
import {chatResponse, imageIcon} from "../../fixtures";
import ChatItem from "../ChatItem";

const Main = ({question}) => {
    return (
        <div className="main">
            <ChatItem
                imageLink={imageIcon}
                text={question}
            />
            <ChatItem
                imageLink={"/images/gptjpg.png"}
                text={chatResponse}
            />
        </div>

    );
};

export default Main;