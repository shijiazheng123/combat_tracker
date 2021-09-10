import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {toolIcons} from "../UIconstants";


export function ToolbarButton(props){
    return(
        <button className={"ToolbarButton"}
                id={props.id}
                style={{backgroundColor: props.clicked === props.id ? "#E54C0B" : "transparent"}}
                onClick={(e) => props.buttonClicked(e)}
                aria-label={props.id}
        >
            {
                toolIcons[props.id].type === "icon" ?
                    <FontAwesomeIcon className={"tool-image"} icon={toolIcons[props.id].source}/>
                    :
                    <img className={"tool-image"} src={toolIcons[props.id].source} alt={props.id}/>
            }
        </button>
    )
}