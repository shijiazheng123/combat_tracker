import * as d3 from "d3";

let active_line;
let area_line;
let counter = 0;
let currentCoordinateProps = {
    x: null,
    y: null
}

const renderPath = d3.line()
    .curve(d3.curveBasisOpen);

export const startDrawing = (event, info) => {


    console.log(info);

    const area = d3.select('#grid').select('g').selectAll(".row");
    const pointer = d3.pointer(event);

    active_line = area
        .append('path')
        .datum([])
        .attr("class", "drawn line drawnLine" + counter)
        .style("stroke", info.color)
        .style("stroke-width", info.stroke);

    area_line = area
        .append('path')
        .datum([])
        .attr("class", "drawn invisibleLine drawnLine" + counter);

    active_line.data().push(pointer);
    area_line.data().push(pointer);
    currentCoordinateProps.x = pointer[0];
    currentCoordinateProps.y = pointer[1];
    counter += 1;
}

export const drawing = (event, info) => {
    if(active_line){
        const pointer = d3.pointer(event);
        let x1 = pointer[0];
        let y1 = pointer[1];
        const dx = x1 - currentCoordinateProps.x;
        const dy = y1 - currentCoordinateProps.y;

        const len = active_line.datum().length;

        if(dx * dx + dy * dy > 100 || len <= 2){
            active_line.datum().push([x1, y1]);
            area_line.datum().push([x1, y1]);

            currentCoordinateProps.x = x1;
            currentCoordinateProps.y = y1;
        }else{
            active_line.datum()[len - 1] = [x1, y1];
            area_line.datum()[len - 1] = [x1, y1];
        }


        active_line.attr("d", renderPath);

        area_line.attr("d", renderPath);
    }
}

export const endDrawing = (event, info) => {
    active_line = null;
    area_line = null;
    currentCoordinateProps.x = null;
    currentCoordinateProps.y = null;
}