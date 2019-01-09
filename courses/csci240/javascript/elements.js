/**
 * Created by DennisMarchuk on 2/28/2018.
 */



d3.select("#barGraph")
    .append("path")
    .attr("d", "M 40 40 v 360 h 340 ")
    .attr("fill", "transparent")
    .attr("stroke", "black")
    .attr("stroke-width", "4");




//BarGraph
d3.selectAll("#barGraph")
    .append("line")
    .attr("x1", 70)
    .attr("x2", 70)
    .attr("y1", 400)
    .attr("y2", 100)
    .attr("stroke", "black")
    .attr("stroke-width", "30");

d3.selectAll("#barGraph")
    .append("line")
    .attr("x1", 120)
    .attr("x2", 120)
    .attr("y1", 400)
    .attr("y2", 160)
    .attr("stroke", "black")
    .attr("stroke-width", "30");

d3.selectAll("#barGraph")
    .append("line")
    .attr("x1", 170)
    .attr("x2", 170)
    .attr("y1", 400)
    .attr("y2", 220)
    .attr("stroke", "black")
    .attr("stroke-width", "30");

d3.selectAll("#barGraph")
    .append("line")
    .attr("x1", 220)
    .attr("x2", 220)
    .attr("y1", 400)
    .attr("y2", 280)
    .attr("stroke", "black")
    .attr("stroke-width", "30");

d3.selectAll("#barGraph")
    .append("line")
    .attr("x1", 270)
    .attr("x2", 270)
    .attr("y1", 400)
    .attr("y2", 220)
    .attr("stroke", "black")
    .attr("stroke-width", "30");

d3.selectAll("#barGraph")
    .append("line")
    .attr("x1", 320)
    .attr("x2", 320)
    .attr("y1", 400)
    .attr("y2", 160)
    .attr("stroke", "black")
    .attr("stroke-width", "30");



//pieChart
d3.selectAll("#pieChart")
    .insert("path")
    .attr("d", "M 210 10 A 200 200 0 0 1 410 210 h -200 v -200 ")
    .attr("fill", "green");

d3.selectAll("#pieChart")
    .insert("text")
    .attr("text-anchor", "middle")
    .attr("x", "310")
    .attr("y", "125")
    .attr("font-size", "20")
    .attr("fill", "black")
    .text("grapes");



d3.selectAll("#pieChart")
    .insert("path")
    .attr("d", "M 410 210 A 200 200 0 0 1 210 410 v -200 h 200 ")
    .attr("fill", "orange");

d3.selectAll("#pieChart")
    .insert("text")
    .attr("text-anchor", "middle")
    .attr("x", "310")
    .attr("y", "295")
    .attr("font-size", "20")
    .attr("fill", "black")
    .text("oranges");



d3.selectAll("#pieChart")
    .insert("path")
    .attr("d", "M 210 410 A 200 200 0 0 1 10 210 h 200 v 200 ")
    .attr("fill", "blue");

d3.selectAll("#pieChart")
    .insert("text")
    .attr("text-anchor", "middle")
    .attr("x", "110")
    .attr("y", "295")
    .attr("font-size", "20")
    .attr("fill", "black")
    .text("blueberries");




d3.selectAll("#pieChart")
    .insert("path")
    .attr("d", "M 10 210 A 200 200 0 0 1 210 10 v 200 h -200 ")
    .attr("fill", "red");


d3.selectAll("#pieChart")
    .insert("text")
    .attr("text-anchor", "middle")
    .attr("x", "110")
    .attr("y", "125")
    .attr("font-size", "20")
    .attr("fill", "black")
    .text("apples");



d3.selectAll("#pieChart")
    .insert("circle")
    .attr("cx", "210")
    .attr("cy", "210")
    .attr("r", "200")
    .attr("fill", "transparent")
    .attr("stroke", "grey")
    .attr("stroke-width", "4");



d3.select(".barGraph")
    .clone(true)
    .attr("id", "barGraph2")
    .selectAll("line")
    .attr("stroke", "red");

d3.select("center")
    .append("hr");
d3.select("#barGraph2")
    .raise();


function remove() {
    d3.select("#barGraph2")
        .select("line")
        .remove();
    console.log("delete")
}



