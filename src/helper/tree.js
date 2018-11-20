import * as d3 from "d3";

const tree = (svgRef, data) => {
  const dims = {
    width: 1100,
    height: 500
  };
  const svg = d3
    .select(svgRef)
    .attr("width", dims.width + 100)
    .attr("height", dims.height + 100);

  const graph = svg.select("#tree").attr("transform", "translate(50,50)");
};

export default tree;
