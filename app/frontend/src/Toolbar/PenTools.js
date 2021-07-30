import React from "react";
import {colors, strokes} from "../UIconstants";


export function PenTools(props){


    return(
        <div className={"tool-overlay"} id={"pen-tools"}>
            {colors.map((color) => (
                <button className={(color === props.currentColor ? "selected-color " : "") + "tool-option color-swatch" }
                        id={color} onClick={()=> {props.setColor(color)}}
                        style={{backgroundColor: color}}/>
            ))}
            <div className={"divider"}/>
            {strokes.map((stroke) => (
                <button className={(stroke === props.currentStroke ? " selected-stroke " : "") + "tool-option"}
                        id={"stroke-" + stroke} onClick={() => {props.setStroke(stroke)}}>
                    <div className={"stroke-selector"}
                         style={{height: stroke, width: stroke}}/>
                </button>
            ))}
        </div>
    )
}