const canvas = d3.select(".canva");
const svg = canvas.append("svg").attr("width", "500").attr("height", "250");

// svg
//   .append("circle")
//   .attr("cx", 100)
//   .attr("cy", 100)
//   .attr("r", "50")
//   .attr("fill", "blue");

// svg
//   .append("rect")
//   .attr("width", 100)
//   .attr("height", 100)
//   .attr("x", 120)
//   .attr("y", 0)
//   .attr("fill", "green")
//   .attr("rx", 15)
//   .attr("ry", 15);

// svg
//   .append("line")
//   .attr("x1", 129)
//   .attr("x2", 45)
//   .attr("y1", 100)
//   .attr("y2", 46)
//   .attr("stroke", "gray");

svg
  .append("text")
  .text("Hello, there!")
  .attr("fill", "gray")
  .attr("stroke", "green")
  .attr("font-size", "15")
  .attr("text-anchor", "end")
  .attr("x", 90)
  .attr("y", 20);

svg
  .append("text")
  .text("Welcome!")
  .attr("fill", "red")
  .attr("stroke", "red")
  .attr("font-size", "13.5")
  .attr("text-anchor", "middle")
  .attr("x", 90)
  .attr("y", 40);

svg
  .append("text")
  .text("How are you?")
  .attr("fill", "blue")
  .attr("stroke", "blue")
  .attr("font-size", "12")
  .attr("text-anchor", "beginning")
  .attr("x", 90)
  .attr("y", 60);
