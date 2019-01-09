/**
 * Created by DennisMarchuk on 3/12/2018.
 */

let gdp = [
    {"state": "DC",
        "gdp": 186172},
    {"state": "New York",
        "gdp":75360},
    {"state": "Massachusetts",
        "gdp":74564},
    {"state": "Delaware",
        "gdp":73931},
    {"state": "Connecticut",
        "gdp":73643},
    {"state": "North Dakota",
        "gdp":68723},
    {"state": "Alaska",
        "gdp":68356},
    {"state": "California",
        "gdp":66310},
    {"state": "New Jersey",
        "gdp":64970},
    {"state": "Wyoming",
        "gdp":64659},
    {"state": "Washington",
        "gdp":64454},
    {"state": "Maryland",
        "gdp": 62874},
    {"state": "Illinois",
        "gdp": 61837},
    {"state": "Minnesota",
        "gdp": 60716},
    {"state": "Nebraska",
        "gdp": 60481},
    {"state": "Virignia",
        "gdp": 58768},
    {"state": "Hawaii",
        "gdp": 58742},
    {"state": "Colorado",
        "gdp":58422},
    {"state": "New Hampshire",
        "gdp": 58327},
    {"state": "Texas",
        "gdp": 58028}
];


let u = d3.select("#bargraph1")
    .selectAll("rect")
    .data(gdp);

u.enter()
    .append("rect")
    .merge(u)
    .attr("height", 19)
    .attr("width", (d) => d.gdp/500)
    .attr("x", 120)
    .attr("y", (d, i) => i * 20)
    .attr("fill", "darkblue");

u.enter()
    .append('text')
    .merge(u)
    .text((d) => d.state)
    .attr('x', 110)
    .attr('text-anchor', 'end')
    .attr('y', (d, i) => i * 20 + 17);



function sortStates() {
    console.log("sort states");

    d3.select("#bargraph1")
        .selectAll("rect")
        .sort((a,b) => d3.ascending(a.state, b.state))
        .attr("y", (d, i) => i * 20);


    d3.select("#bargraph1")
        .selectAll("text")
        .sort((a,b) => d3.ascending(a.state, b.state))
        .attr('y', (d, i) => i * 20 + 17);
}

function sortGDP() {

    console.log("sort GDP")
    d3.select("#bargraph1")
        .selectAll("rect")
        .sort((a,b) => d3.ascending(a.gdp, b.gdp))
        .attr("y", (d, i) => i * 20);


    d3.select("#bargraph1")
        .selectAll("text")
        .sort((a,b) => d3.ascending(a.gdp, b.gdp))
        .attr('y', (d, i) => i * 20 + 17);

}


u.exit().remove();
