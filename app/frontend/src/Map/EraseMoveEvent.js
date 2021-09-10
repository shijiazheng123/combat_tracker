import * as d3 from "d3";

export const overlapEvent = (event) => {

}

function erase(event){
    if(event.buttons === 1 || event.buttons === 3){
        d3.selectAll("." + event.target.className.baseVal.split(" ")[1]).remove()
    }
}