import React from 'react';
import "./style.css"
import {imageIcon} from "../../fixtures";
import ChatItem from "../ChatItem";

const Main = () => {
    return (
        <div className="main">
            <ChatItem
            imageLink={imageIcon}
            text={"텍스트"}/>
            <ChatItem
                imageLink={imageIcon}
                text={"텍스트"}/>
        </div>

    );
};

export default Main;