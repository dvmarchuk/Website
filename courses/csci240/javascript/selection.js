/**
 * Created by DennisMarchuk on 2/27/2018.
 */

let barColor = function (){
    d3.select("#graph")
        .selectAll("path")
        .attr("stroke", "green");
};


let pieColor = function () {
    d3.select("#quartered-circle")
        .selectAll("path")
        .attr("fill", "pink");
};


let pieText = function(){
    d3.select("#apples")
        .text("one");

    d3.select("#grapes")
        .text("two");

    d3.select("#blueberries")
        .text("three");

    d3.select("#oranges")
        .text("four");
};



let titleColor = function(){

    d3.select("#title")
        .classed("red", true)
        .style("color", "red");
};


let titleFont = function(){
        d3.select("#title")
            .style('font-size', '50px');
};