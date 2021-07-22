import React, {useState} from "react";

export function ToolbarButton(props){
    return(
        <button className={"ToolbarButton"}
                id={props.id}
                style={{backgroundColor: props.clicked === props.id ? "red" : "white"}}
                onClick={(e) => props.buttonClicked(e)}
        >
            {props.id}
        </button>
    )
}