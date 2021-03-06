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

  //data strat

  const stratify = d3
    .stratify()
    .id(d => d.name)
    .parentId(d => d.parent);

  const tree = d3.tree().size([dims.width, dims.height]);

  const color = d3.scaleOrdinal(["#f4511e", "#e91e63", "#e53935", "#9c27b0"]);

  //when data becomes available in componentDidUpdate()
  if (data) {
    graph.selectAll(".node").remove();
    graph.selectAll(".link").remove();

    color.domain(data.map(item => item.department));

    const rootNode = stratify(data);
    //console.log(rootNode);
    const treeData = tree(rootNode);
    //console.log(treeData);
    const nodes = graph.selectAll(".node").data(treeData.descendants());

    const links = graph.selectAll(".link").data(treeData.links());

    links
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("fill", "none")
      .attr("stroke", "#aaa")
      .attr("stroke-width", 2)
      .attr(
        "d",
        d3
          .linkVertical()
          .x(d => d.x)
          .y(d => d.y)
      );

    const enterNodes = nodes
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${d.x},${d.y})`);

    enterNodes
      .append("rect")
      .attr("fill", d => color(d.data.department))
      .attr("stroke", "#555")
      .attr("stroke-width", 2)
      .attr("height", 50)
      .attr("width", d => d.data.name.length * 20)
      .attr("transform", d => {
        let x = d.data.name.length * 10;
        return `translate(${-x},-25)`;
      });

    enterNodes
      .append("text")
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .text(d => d.data.name);
  }
};

export default tree;
