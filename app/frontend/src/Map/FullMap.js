import * as d3 from "d3";
import React, {useEffect, useState} from "react";

import {setZoom} from "./ZoomAndPan";
import {startDrawing} from "./FreehandDrawing";
import {dragStart, dragging, dragEnd} from "./SetDrag";

import './stylesheets/Map.css';

export function FullMap(props){

    //background grid creation

    const size = 2000;
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

    const checkButton = () => {
        if(props.button === "erase"){
            d3.selectAll(".drawn")
                .on("mouseover", (event) => erase(event))
                .on("mousedown", (event) => erase(event));
        }
        else if(props.button === "move"){

        }
        else{
            d3.selectAll(".drawn")
                .on("mouseover", null)
                .on("mousedown", null);
        }
    }

    const erase = (event) => {
        if(event.which === 1 || event.which === 3){
            d3.selectAll("." + event.target.className.baseVal.split(" ")[2]).remove()
        }

    }


    useEffect(() => {
        //grid is created if wasn't created before
        if(document.getElementById("grid").innerHTML === ""){
            createGrid(gridArr())
        }

        //see if button is erase or move
        checkButton();

        //set cursor
        let svg = d3.select('#grid').style("cursor", cursorIcon[props.button]);

        //disable panning when drag button isn't on
        setZoom(props.button, svg);

        let info = props.info;

        //drag event listeners

        const drag = d3.drag();

        svg.select('g').selectAll('.row')
            .on('mousedown', (event) => {
                setMouseDragging(true);
                dragStart(event, props.button, info)
            })
            .on('mousemove', (event) => {
                // if(mouseDragging){
                //
                // }
                dragging(event, props.button, info)
            })
            .on('mouseup', (event) => {
                setMouseDragging(false);
                dragEnd(event, props.button, info)
            });

    })
    return(<div id={"grid-container"}>
                <svg id={"grid"}/>
            </div>
    );
}