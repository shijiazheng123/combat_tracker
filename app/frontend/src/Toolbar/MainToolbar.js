import React, {useEffect, useState} from "react";
import {ToolbarButton} from "./ToolbarButton";
import './Toolbar.css';


export function MainToolbar(props){

    const [button, setButton] = useState("drag");
    const tools = ["drag", "pen"];

    const buttonClicked = (event) => {

        let clicked = event.target.id;
        setButton(clicked);
        props.buttonClick(clicked);
    }

    return(
        <div className={"ToolBar"}>
            {tools.map((item) => (
                <ToolbarButton id={item} clicked={button} buttonClicked={buttonClicked}/>
            ))}
        </div>
    )
}