/**
 * Created by DennisMarchuk on 4/11/2018.
 */

male = 0;
female = 0;

d3.csv("../csci240/data/highway1.csv")
    .then(function (accidents) {


        //noinspection InfiniteLoopJS
        for(i=0; i < accidents.length; i++){
            if(accidents[i].sex == 1){
                male++;
            }else{
                female++;
            }
        }

        var total = [{sex:"male", num:male},
                        {sex:"female", num:female}];

        console.log("male" + male + "female" + female);

        males = male;
        females = female;




        var colorScale = d3.scaleSequential(d3.interpolate("blue", "red"))
            .domain([260,740]);

        var svg = d3.select("body")
            .append("svg")
            .attr("width", 1280)
            .attr("height", 768);






        var angleGen = d3.pie();
        // .value((d) => (gender(d.sex)));


        // var data = angleGen(sex='Male');
        var data = angleGen([740,260]);



        // console.log(accidents);
        let arcGen = d3.arc()
            .innerRadius(0)
            .outerRadius(300);



        var tool_tip = d3.tip()
            .attr("class", "d3-tip")
            .offset([-8, 70])
            .html((d) => ("Accidents: " + d.firstname))
            //.html(function(d) { return "Accidents: " + d.value });
            svg.call(tool_tip);

        let tooltip = d3.select("body")
            .append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);


        //
        // d3.selectAll("path")
        //     .on("mouseover", function(d) {
        //         tooltip.transition()
        //             .duration(200)
        //             .style("opacity", .9);
        //         tooltip.html("Accidents" )
        //             .style("left", (d3.event.pageX) + "px")
        //             .style("top", (d3.event.pageY - 10) + "px");
        //     })
        //     .on("mouseout", function(d) {
        //         tooltip.transition()
        //             .duration(500)
        //             .style("opacity", 0);
        //     });


        svg.selectAll("path")
            .data(data)
            .enter()
            .append("path")
            .attr("d", arcGen)
            .attr("fill", (d) => colorScale(d.value))
            .attr("stroke", "gray")
            .attr("stroke-width", 1)
            .attr("transform", "translate(500,300)")
            .on("mouseover", tool_tip.show);







        //legend
        var color = d3.scaleLinear()
            .domain([0, 10])
            .range(["red", "blue"]);

        var legend = d3.legendColor()
            .scale(color)
            .cells(2)
            .title("Legend")
            .labels(["Male: " + male + " Accidents", "Female: " + female + " Accidents"]);

        svg.append("g")
            .attr("transform", "translate(70,620)")//style in css
            .call(legend);


    });








