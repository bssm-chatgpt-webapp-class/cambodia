import React from 'react';
import {HambugIcon, PlusIcon} from "../../icons"
import "./style.css"

const Header = () => {
    return (
        <div className="header">
            <HambugIcon />
            <div>new chat</div>
            <PlusIcon />
        </div>
    )
};

export default Header;