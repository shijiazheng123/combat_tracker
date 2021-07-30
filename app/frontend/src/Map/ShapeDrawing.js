import * as d3 from "d3";
import {opacity} from "../UIconstants";

let active_shape;
let currentShapeProps = {
    x: null,
    y: null
}

export const startShape = (event, info) => {
    let mouse = d3.pointer(event);
    currentShapeProps.x = mouse[0];
    currentShapeProps.y = mouse[1];

    switch(info.shape){
        case "rect":
        // for rectangles
            active_shape = d3.select('#grid').select('g').selectAll(".row").append("rect")
                .attr("x", mouse[0])
                .attr("y", mouse[1])
                .attr("height", 10)
                .attr("width", 10)
                .attr("class", "rect-shape")
                .attr("fill", info.color)
                .attr("opacity", info.opacity ? opacity[1] : opacity[0]);
            break;
        case "circle":
        // for circles
            active_shape = d3.select('#grid').select('g').selectAll(".row").append("circle")
                .attr("cx", mouse[0])
                .attr("cy", mouse[1])
                .attr("r", 10)
                .attr("class", "circle-shape")
                .attr("fill", info.color)
                .attr("opacity", info.opacity ? opacity[1] : opacity[0]);
            break;
        case "polygon":
            // for polygons
            active_shape = d3.select('#grid').select('g').selectAll(".row").append("polygon")
                .attr("points", mouse[0] + "," + mouse[1] + " " +
                    (mouse[0] - 5) + "," + (mouse[1] + 5) + " " +
                    (mouse[0] + 5) + "," + (mouse[1] + 5))
                .attr("class", "polygon-shape")
                .attr("fill", info.color)
                .attr("opacity", info.opacity ? opacity[1] : opacity[0]);
            break;
        default:
            break;
    }

}

export const dragShape = (event, info) =>{

    let mouse = d3.pointer(event);

    if(active_shape){

        switch (info.shape){
            case "rect":
            //for rectangles
                active_shape.attr("x", Math.min(currentShapeProps.x, mouse[0]))
                    .attr("y", Math.min(currentShapeProps.y, mouse[1]))
                    .attr("width", Math.abs(currentShapeProps.x - mouse[0]))
                    .attr("height", Math.abs(currentShapeProps.y - mouse[1]));
                break;
            case "circle":
            //for circles
                active_shape.attr("r",
                    Math.sqrt((Math.pow(currentShapeProps.x - mouse[0], 2) +
                        (Math.pow(currentShapeProps.y - mouse[1], 2)))));
                break;
            case "polygon":
                //for polygons
                active_shape.attr("points", currentShapeProps.x + "," + currentShapeProps.y + " " +
                    mouse[0] + "," + mouse[1] + " " +
                    (currentShapeProps.x - (mouse[0]-currentShapeProps.x)) + "," + mouse[1]);
                break;
            default:
                break;

        }


    }
}

export const endShape = (event) => {
    active_shape = null;
    currentShapeProps.x = null;
    currentShapeProps. y = null;
}