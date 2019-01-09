/**
 * Created by DennisMarchuk on 4/13/2018.
 */

let data = {
    "member": {
    "id": "34sdt348f7",
        "firstname": "Natālija",
        "lastname":  "Kurčanova",
        "sex": 2,
        "image": "people/kurchik.jpg"
},
    "children": [
    {
        "member": {
            "id": "34kit348f7",
            "firstname": "Andrejs",
            "lastname":  "Jeļisejevs",
            "sex": 1,
            "image": "people/elisej.jpg"
        },
        "children": [
            {
                "member": {
                    "id": "11kit348f1",
                    "firstname": "Natālija",
                    "lastname":  "Tarasova",
                    "sex": 2,
                    "image": "people/tarasik.jpg"
                }
            },
            {
                "member": {
                    "id": "11kit348f1",
                    "firstname": "Tanya",
                    "lastname":  "Tarasova",
                    "sex": 2,
                    "image": "people/tarasik.jpg"
                }
            },
            {
                "member": {
                    "id": "11kit348f1",
                    "firstname": "Margarita",
                    "lastname":  "Tarasova",
                    "sex": 2,
                    "image": "people/tarasik.jpg"
                }
            },

            {
                "member": {
                    "id": "dgkit548f1",
                    "firstname": "Inna",
                    "lastname":  "Adameņa",
                    "sex": 2,
                    "image": "people/inna.jpg"
                }
            }
        ]
    },
    {
        "member": {
            "id": "666it548f1",
            "firstname": "Darja",
            "lastname":  "Petrušina",
            "sex": 2,
            "current": true,
            "image": "people/dasha.jpg"
        },
        "partner": {
            "id": "4389t548f1",
            "firstname": "Pāvels",
            "lastname":  "Degterenko",
            "sex": 1,
            "image": "people/pavel.jpg",
            "relatives": 2
        },
        "children": [
            {
                "member": {
                    "id": "sdf4fsh544",
                    "firstname": "Oļegs",
                    "lastname":  "Jaroševičs",
                    "sex": 1,
                    "image": "people/oleg.jpg"
                },
                "partner": {
                    "id": "6ej774t23r3",
                    "firstname": "Jūlija",
                    "lastname":  "Belova",
                    "sex": 2,
                    "image": "people/julja.jpg",
                    "relatives": 4
                },
                "children": [
                    {
                        "member": {
                            "id": "d5745fg5f1",
                            "firstname": "Andrejs",
                            "lastname":  "Silins",
                            "sex": 1,
                            "image": "people/silin.jpg"
                        }
                    },
                    {
                        "member": {
                            "id": "435dfdf23",
                            "firstname": "Dmitrijs",
                            "lastname":  "Migunovs",
                            "sex": 1,
                            "image": "people/migunov.jpg"
                        }
                    },
                    {
                        "member": {
                            "id": "dasdfdgkdf1",
                            "firstname": "Eduards",
                            "lastname":  "Plehs",
                            "sex": 1,
                            "image": "people/plehs.jpg"
                        }
                    },
                    {
                        "member": {
                            "id": "3434sdf548f1",
                            "firstname": "Ivo",
                            "lastname":  "Azirjans",
                            "sex": 1,
                            "image": "people/ivo.jpg"
                        }
                    }
                ]
            }

        ]
    },
    {
        "member": {
            "id": "dere343er34",
            "firstname": "Edgars",
            "lastname":  "Bokta",
            "sex": 1,
            "image": "people/bokta.jpg"
        },
        "children": [
            {
                "member": {
                    "id": "d45465448f1",
                    "firstname": "Anastasija",
                    "lastname":  "Jevdokimova",
                    "sex": 2,
                    "image": "people/nastja.jpg"
                },
                "children": [
                    {
                        "member": {
                            "id": "uu3245ef48f1",
                            "firstname": "Antija",
                            "lastname":  "Janševska",
                            "sex": 2,
                            "image": "people/antija.jpg"
                        }
                    },
                    {
                        "member": {
                            "id": "32fdf43t548f1",
                            "firstname": "Dina",
                            "lastname":  "Konopļova",
                            "sex": 2,
                            "image": "people/dina.jpg"
                        }
                    },
                    {
                        "member": {
                            "id": "32fdf43t548f1",
                            "firstname": "Lena",
                            "lastname":  "Konopļova",
                            "sex": 2,
                            "image": "people/dina.jpg"
                        }
                    },
                    {
                        "member": {
                            "id": "32fdf43t548f1",
                            "firstname": "Andrey",
                            "lastname":  "Konopļova",
                            "sex": 2,
                            "image": "people/dina.jpg"
                        }
                    }
                ]
            },
            {
                "member": {
                    "id": "23ffkit5484",
                    "firstname": "Maksims",
                    "lastname":  "Kondratjevs",
                    "sex": 1,
                    "image": "people/maks.jpg",
                    "alive": false
                }
            },
            {
                "member": {
                    "id": "123it5648f1",
                    "firstname": "Vitālijs",
                    "lastname":  "Silins",
                    "sex": 1,
                    "image": "people/vitalik.jpg"
                }
            }
        ]
    }
]
};


var tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);


var root = d3.hierarchy(data);

// console.log(root);

var treeLayout = d3.tree(root)
    .size([800, 600]);

treeLayout(root);




        let svg = d3.select("#demo1");




        svg.select('g.links')
            .selectAll('line.link')
            .data(root.links())
            .enter()
            .append('line')
            .attr('x1', function(d) {return d.source.x;})
            .attr('y1', function(d) {return d.source.y;})
            .attr('x2', function(d) {return d.target.x;})
            .attr('y2', function(d) {return d.target.y;})
            .attr('stroke', "darkgray")
            .attr('stroke-width', 2);

        svg.select('g.nodes')
            .selectAll('circle.node')
            .data(root.descendants())
            .enter()
            .append('circle')
            .classed("nodes", true)
            .attr('cx', function(d) {return d.x;})
            .attr('cy', function(d) {return d.y;})
            .attr('r', 7)
            .attr("fill", "lightblue")
            .attr('stroke', "darkgray")
            .attr('stroke-width', 1)
            .on("mouseover", function(d) {
                tooltip.html("Name: " + d.data.member.firstname + " " + d.data.member.lastname)

                // tooltip.html((d) => d.firstname)
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 10) + "px")
                    .style("opacity", .9);
            });





