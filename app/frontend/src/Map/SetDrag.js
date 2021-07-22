import * as d3 from "d3";
import {setZoom} from "./ZoomAndPan";
import {startDrawing, drawing, endDrawing} from "./FreehandDrawing";



export const dragStart = (event, button) => {
    switch (button){
        case "drag":
            break;
        case "pen":
            startDrawing(event);
            break;
        default:
            break;

    }
}

export const dragging = (event, button) => {
    switch (button){
        case "drag":
            break;
        case "pen":
            drawing(event);
            break;
        default:
            break;

    }
}

export const dragEnd = (event, button) => {
    switch (button){
        case "drag":
            break;
        case "pen":
            endDrawing(event);
            break;
        default:
            break;

    }
}