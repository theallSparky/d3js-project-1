const canvas = d3.select(".canva");
const svg = canvas.append("svg").attr("width", "500").attr("height", "250");

svg
  .append("circle")
  .attr("cx", 100)
  .attr("cy", 100)
  .attr("r", "50")
  .attr("fill", "blue");

svg
  .append("rect")
  .attr("width", 10)
  .attr("height", 50)
  .attr("x", 150)
  .attr("y", 80)
  .attr("fill", "green");

svg
  .append("line")
  .attr("x1", 129)
  .attr("x2", 45)
  .attr("y1", 300)
  .attr("y2", 46)
  .attr("stroke", "gray");
