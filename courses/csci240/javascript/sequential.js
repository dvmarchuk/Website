/**
 * Created by DennisMarchuk on 3/26/2018.
 */

/**
 * Created by DennisMarchuk on 3/19/2018.
 */

//circle radius = score
//x = time of the day
//y = length of post


function convert(input) {
    var time = new Date(input * 1000);
    return time.toLocaleTimeString([], {hour: '2-digit', hour12: false});

}


d3.csv("../csci240/data/reddit.csv")
    .then(function (comment) {


        var svg;

        var rscale = d3.scaleLinear()
            .domain([0, 25])
            .range([40, 990]);

        var yscale = d3.scaleLinear()
            .domain([0, 3000])
            .range([40, 745]);

        var sscale = d3.scaleLinear()
            .domain([0, 800])
            .range([2, 50]);

        let color = d3.scaleSequential()
            .interpolator(d3.interpolate("blue", "red"))
            .domain([0, 800]);


        var xScale = d3.scaleLinear()
            .domain([0, 24])
            .range([10, 990]);

        var xAxis = d3.axisBottom(xScale);
        var yAxis = d3.axisLeft(yscale);


        svg = d3.select("body")
            .append("svg")
            .attr("width", 1280)
            .attr("height", 768);


        svg.selectAll("circle")
            .data(comment)
            .enter()
            .append("circle")
            .attr("cx", function (d) {
                return rscale(convert(d.retrieved_on));
            })
            .attr("cy", function (d) {
                return yscale(d.f0_);
            })
            .attr("r", function (d) {
                return sscale(d.score);
            })
            .attr("fill", function (d) {
                return color(d.score)
            });

        svg.append("g")
            .attr("transform", "translate(20,750)")
            .call(xAxis);


        svg.append("g")
            .attr("transform", "translate(20,0)")
            .call(yAxis);

        svg.append("text")
            .attr("transform", "translate(40,30)")
            .style("text-anchor", "middle")
            .attr("fill", "black")
            .text("Post Length");

        svg.append("text")
            .attr("transform", "translate(80,740)")
            .style("text-anchor", "middle")
            .attr("fill", "black")
            .text("Time Submitted");
    });

