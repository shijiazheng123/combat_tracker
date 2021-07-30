import * as d3 from "d3";
import React, {useEffect, useState} from "react";

import {setZoom} from "./ZoomAndPan";
import {startDrawing} from "./FreehandDrawing";
import {dragStart, dragging, dragEnd} from "./SetDrag";

import './stylesheets/Map.css';

export function FullMap(props){

    //background grid creation

    const size = 1800;
    const square = 30;

    const cursorIcon = {
        "drag": "grab",
        "pen": "crosshair",
        "shape": "crosshair"
    }

    const [mouseDragging, setMouseDragging] = useState(false);


    const gridArr = () => {

        let squares = size / square;

        let map = [];

        //loop over rows
        let y = 1;
        for(let row = 0; row < squares; row++){
            //create columns
            let rowArr = [];
            let x = 1;
            for(let column = 0; column < squares; column++){
                rowArr.push({
                    x: x,
                    y: y
                });
                x += square;
            }
            map.push(rowArr);
            y += square;
        }

        return map;
    }

    const createGrid = (data) => {

        let svg = d3.select('#grid')
            .attr("width", size)
            .attr("height", size)


        let g = svg.append("g")



        let row = g.selectAll(".row")
            .data(data)
            .enter().append("g")
            .attr("class", "row")

        let column = row.selectAll(".square")
            .data(function(d) {return d;})
            .enter().append("rect")
            .attr("class", "square")
            .attr("x", function(d) { return d.x; })
            .attr("y", function(d) { return d.y; })
            .attr("width", square)
            .attr("height", square)
            .style("fill-opacity", "0")
            .style("stroke", "#fff");

    }


    useEffect(() => {
        if(document.getElementById("grid").innerHTML === ""){
            createGrid(gridArr())
        }
        let svg = d3.select('#grid').style("cursor", cursorIcon[props.button]);
        setZoom(props.button, svg);

        svg.select('g').selectAll('.row')
            .on('mousedown', (event) => {
                setMouseDragging(true);
                dragStart(event, props.button, props.info)
            })
            .on('mousemove', (event) => {
                if(mouseDragging){
                    dragging(event, props.button, props.info)
                }

            })
            .on('mouseup', (event) => {
                setMouseDragging(false);
                dragEnd(event, props.button, props.info)
            });
        // setDrag(props.button, svg);

    })
    return(<div id={"grid-container"}>
                <svg id={"grid"}/>
            </div>
    );
}