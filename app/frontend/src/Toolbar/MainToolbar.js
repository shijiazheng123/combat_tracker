import React, {useEffect, useState} from "react";
import {ToolbarButton} from "./ToolbarButton";
import './Toolbar.css';


export function MainToolbar(props){

    //tools to implement:
    //zoom and pan
    //move (moves strokes, shapes, and pins)
    //pen (and color change and stroke change)
    //shape creator (with color change and resize)
    //erase (deletes strokes, shapes, pins) with clear all strokes, clear all shapes, clear strokes/shapes, clear all
    //player and monster pins (with upload custom icon function)
    //upload image


    const [button, setButton] = useState("drag");
    const [penColor, setPenColor] = useState("black");
    const [shapeColor, setShapeColor] = useState("black");



    const buttonClicked = (event) => {

        let clicked = event.target.id;
        setButton(clicked);
        props.buttonClick(clicked);
    }

    return(
        <div className={"ToolBar"}>
            {props.tools.map((item) => (
                <ToolbarButton id={item} clicked={button} buttonClicked={buttonClicked}/>
            ))}
        </div>
    )
}