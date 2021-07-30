import * as d3 from "d3";

export const setZoom = (button, svg) => {
    let g = svg.select("g");
    let zoom = d3.zoom()
        .scaleExtent([1,3])
        .translateExtent([[0, 0],[2050, 2050]])
        .filter(() => button === "drag")
        .on('zoom', function(event) {
            g.selectAll('.row')
                .attr('transform', event.transform)
        })
    svg.call(zoom);
}