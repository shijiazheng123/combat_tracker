import * as d3 from "d3";
import {setZoom} from "./ZoomAndPan";
import {startDrawing, drawing, endDrawing} from "./FreehandDrawing";
import {startShape, dragShape, endShape} from "./ShapeDrawing";



export const dragStart = (event, button, info) => {
    switch (button){
        case "drag":
            break;
        case "move":
            console.log(event);
            break;
        case "pen":
            startDrawing(event, info);
            break;
        case "shape":
            startShape(event, info);
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
        case "shape":
            dragShape(event, info);
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
        case "shape":
            endShape(event);
            break;
        default:
            break;

    }
}