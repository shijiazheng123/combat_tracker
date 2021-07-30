import React from "react";
import {colors, opacity} from "../UIconstants";

export function ShapeTools(props){

    return(
        <div className={"tool-overlay"} id={"shape-tools"}>
            {colors.map((color) => (
                <button className={(color === props.currentColor ? "selected-color " : "") + "tool-option color-swatch" }
                        id={color} onClick={()=> {props.setColor(color)}}
                        style={{backgroundColor: color}}/>
            ))}

            <div className={"divider"}/>

            <button className={ "shape-option"}
                    onClick={() => {props.setShape("rect")}}
            >
                <svg>
                    <rect x={1} y={1} width={18} height={18} className={(props.currentShape === "rect" ? "selected-shape ": "") + "shape"} />
                </svg>
            </button>

            <button className={"shape-option"}
                    onClick={() => {props.setShape("circle")}}
            >
                <svg>
                    <circle cx={10} cy={10} r={9} className={(props.currentShape === "circle" ? "selected-shape ": "") + "shape"} />
                </svg>
            </button>

            <button className={"shape-option"}
                    onClick={() => {props.setShape("polygon")}}
            >
                <svg>
                    <polygon points={"9,1 1,18 18,18"} className={(props.currentShape === "polygon" ? "selected-shape ": "") + "shape"} />
                </svg>
            </button>

            <div className={"divider"}/>

            <button className={(props.transparentOn ? "selected-opacity " : "") + "opacity-option"}
                    onClick={() => {props.setOpacity(!props.transparentOn)}}
            />

        </div>
    )
}