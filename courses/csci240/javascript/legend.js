/**
 * Created by DennisMarchuk on 4/6/2018.
 */

// Include at least one axis that uses a quantize or ordinal scale.  Label the ticks and axis appropriately.
//     Include a legend using Susie Lu’s legend module.
//     Provide a title for the visualization and provide a proper citation for the data source including a link.




d3.csv("../csci240/data/highway1k.csv")
    .then(function (comment) {

        let male = 0;
        let female = 0;


        var svg = d3.select("body")
            .append("svg")
            .attr("width", 1280)
            .attr("height", 768);

        var xscale = d3.scaleLinear()//time
            .domain([0, 24])
            .range([35, 1024]);

        var yscale = d3.scaleLinear()
            .domain([15, 99])
            .range([15, 768]);

        var sscale = d3.scaleLinear()
            .domain([0, 10])
            .range([4, 4]);

        let gender = function convert(sex) {
            if (sex === "Male") {
                maleCounter();
                return convert = 0;
            } else {
                female++;
                return convert = 10;
            }//there are only two genders
        };

        console.log(male);
        console.log(female);

        let maleCounter = function(){
            male++;
            console.log("male " + male);
            return male;
        };

        var color = d3.scaleLinear()
            .domain([0, 10])
            .range(["red", "blue"]);

        var legend = d3.legendColor()
            .scale(color)
            .cells(2)
            .title("Legend")
            .labels(["Male ", "Female "]);

        var xAxis = d3.axisBottom(xscale);
        var yAxis = d3.axisLeft(yscale);


        svg.selectAll("circle")
            .data(comment)
            .enter()
            .append("circle")
            .attr("cx", function (d) {
                return xscale(d.hour_of_crash) + (gender(d.sex));
            })
            .attr("cy", function (d) {
                return yscale(d.age);
            })
            .attr("r", function (d) {
                return sscale(gender(d.sex));
            })
            .attr("fill", function (d) {
                return color(gender(d.sex));
            });


        svg.append("g")
            .attr("transform", "translate(0,750)")
            .style("text-anchor", "middle")
            .attr("fill", "black")
            .text("Time Submitted")
            .call(xAxis);


        svg.append("g")
            .attr("transform", "translate(20,0)")
            .style("text-anchor", "middle")
            .attr("fill", "black")
            .text("Post Length")
            .call(yAxis);


        svg.append("text")
            .attr("transform", "translate(80,20)")
            .style("text-anchor", "middle")
            .attr("fill", "black")
            .text("Age of Driver");

        svg.append("text")
            .attr("transform", "translate(80,740)")
            .style("text-anchor", "middle")
            .attr("fill", "black")
            .text("Time of Accident");

        svg.append("g")
            .attr("transform", "translate(70,620)")//style in css
            .call(legend);
        // const promise = legend();


    });








