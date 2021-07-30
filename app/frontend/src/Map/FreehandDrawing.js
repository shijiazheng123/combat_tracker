import * as d3 from "d3";

let active_line;

const renderPath = d3.line()
    .x((d) => d[0])
    .y((d) => d[1])
    .curve(d3.curveBasisOpen);

export const startDrawing = (event, info) => {
    console.log(info);

    active_line = d3.select('#grid').select('g').selectAll(".row")
        .append('path')
        .datum([])
        .attr("class", "line")
        .style("stroke", info.color)
        .style("stroke-width", info.stroke);

    active_line.data().push(d3.pointer(event))
    console.log(d3.pointer(event))
}

export const drawing = (event, info) => {
    if(active_line){
        active_line.datum().push(d3.pointer(event));
        active_line.attr("d", renderPath);
    }
}

export const endDrawing = (event, info) => {
    active_line = null;
}