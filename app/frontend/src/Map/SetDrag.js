import * as d3 from "d3";
import {setZoom} from "./ZoomAndPan";
import {startDrawing, drawing, endDrawing} from "./FreehandDrawing";



export const dragStart = (event, button, info) => {
    switch (button){
        case "drag":
            break;
        case "pen":
            startDrawing(event, info);
            break;
        default:
            break;

    }
}

export const dragging = (event, button, info) => {
    switch (button){
        case "drag":
            break;
        case "pen":
            drawing(event, info);
            break;
        default:
            break;

    }
}

export const dragEnd = (event, button, info) => {
    switch (button){
        case "drag":
            break;
        case "pen":
            endDrawing(event, info);
            break;
        default:
            break;

    }
}