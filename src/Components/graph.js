import React, { Component } from 'react';
import firebase from '../config'
var d3 = require("d3");

const data = {
    nodes: [
        {
            id: "The Avengers",
            poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            group: 1,
        },
        {
            id: "Robert Downey Jr.",
            group: 2
        },
        {
            id: "Chris Evans",
            group: 2
        },
        {
            id: "Mark Ruffalo",
            group: 2
        },
        {
            id: "Chris Hemsworth",
            group: 2
        },
        {
            id: "Knives Out",
            poster: "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg",
            group: 1,
        },
        {
            id: "Daniel Craig",
            group: 2
        },
        {
            id: "Ana de Armas",
            group: 2
        },
        {
            id: "Jamie Lee Curtis",
            group: 2
        },
        {
            id: "Skyfall",
            poster: "https://m.media-amazon.com/images/M/MV5BNDVhZmJiYWMtNmIzMC00ZWNiLTkzZDYtNGNlZmViMGM4OGExXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
            group: 1
        },
        {
            id: "Judi Dench",
            group: 2
        },
        {
            id: "Javier Bardem",
            group: 2
        },
        {
            id: "Ralph Fiennes",
            group: 2
        },
        {
            id: "Now You See Me 2",
            poster: "https://m.media-amazon.com/images/M/MV5BYjhlNDljNTgtZjc4My00NmZmLTk2YzAtYWE5MDYwYjM4MTkzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
            group: 1
        },
        {
            id: "Jesse Eisenberg",
            group: 2
        },
        {
            id: "Woody Harrelson",
            group: 2
        },
        {
            id: "Dave Franco",
            group: 2
        },
        {
            id: "Warm Bodies",
            poster: "https://m.media-amazon.com/images/M/MV5BYTc5ZjFhMDItYmViMi00YjI5LTgzNzctZjcxMDYzMWU2NTk2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
            group: 1
        },
        {
            id: "Nicholas Hoult",
            group: 2
        },
        {
            id: "Teresa Palmer",
            group: 2
        },
        {
            id: "Analeigh Tipton",
            group: 2
        },
        {
            id: "Dolittle",
            poster: "https://m.media-amazon.com/images/M/MV5BMDNkODA5ZGQtODczOS00OTQxLThhMTItMjk0ZmNhMDM0YjNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
            group: 1
        },
        {
            id: "Antonio Banderas",
            group: 2
        },
        {
            id: "Michael Sheen",
            group: 2
        },
        {
            id: "Jim Broadbent",
            group: 2
        },
        {
            id: "Spy Kids",
            poster: "https://m.media-amazon.com/images/M/MV5BY2JhODU1NmQtNjllYS00ZmQwLWEwZjYtMTE5NjA1M2YyMzdjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            group: 1
        },
        {
            id: "Carla Gugino",
            group: 2
        },
        {
            id: "Alexa PenaVega",
            group: 2
        },
        {
            id: "Daryl Sabara",
            group: 2
        },
        {
            id: "The Girl with the Dragon Tattoo",
            poster: "https://m.media-amazon.com/images/M/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw@@._V1_SX300.jpg",
            group: 1
        },
        {
            id: "Rooney Mara",
            group: 2
        },
        {
            id: "Christopher Plummer",
            group: 2
        },
        {
            id: "Stellan Skarsgård",
            group: 2
        },


    ],
    links: [
        {
            source: 0,
            target: 1
        },
        {
            source: 0,
            target: 2
        },
        {
            source: 0,
            target: 3
        },
        {
            source: 0,
            target: 4
        },
        {
            source: 5,
            target: 2
        },
        {
            source: 5,
            target: 6
        },
        {
            source: 5,
            target: 7
        },
        {
            source: 5,
            target: 8
        },
        {
            source: 9,
            target: 6
        },
        {
            source: 9,
            target: 10
        },
        {
            source: 9,
            target: 11
        },
        {
            source: 9,
            target: 12
        },
        {
            source: 13,
            target: 3
        },
        {
            source: 13,
            target: 14
        },
        {
            source: 13,
            target: 15
        },
        {
            source: 13,
            target: 16
        },
        {
            source: 17,
            target: 16
        },
        {
            source: 17,
            target: 18
        },
        {
            source: 17,
            target: 19
        },
        {
            source: 17,
            target: 20
        },
        {
            source: 21,
            target: 1
        },
        {
            source: 21,
            target: 22
        },
        {
            source: 21,
            target: 23
        },
        {
            source: 21,
            target: 24
        },
        {
            source: 25,
            target: 22
        },
        {
            source: 25,
            target: 26
        },
        {
            source: 25,
            target: 27
        },
        {
            source: 25,
            target: 28
        },
        {
            source: 29,
            target: 6
        },
        {
            source: 29,
            target: 30
        },
        {
            source: 29,
            target: 31
        },
        {
            source: 29,
            target: 32
        }

    ]
}

export class Graph extends Component {
    drag = (simulation) => {
        function dragStarted(d){
            if(!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx=d.x;
            d.fy=d.y;
        }
        function dragged(d){
            d.fx=d3.event.x;
            d.fy=d3.event.y;
        }

        function dragEnded(d){
            if(!d3.event.active) simulation.alphaTarget(0);
            d.fx=null;
            d.fy=null;
        }

        return d3.drag()
            .on("start", dragStarted)
            .on("drag", dragged)
            .on("end", dragEnded);
        
    }

    chart(nodes, links) {
        const width = 1920;
        const height = 1080;

        const obj_links = links.map(d => Object.create(d));
        const obj_nodes = nodes.map(d => Object.create(d));

        const svg = d3.create("svg")
            .attr("viewBox", [0, 0, width, height]);


        const link = svg.append("g")
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.6)
            .selectAll("line")
            .data(obj_links)
            .join("line")
            .attr("stroke-width", d => Math.sqrt(d.value));

            


        var defs = svg.append('svg:defs');
        defs.append("svg:pattern")
            .attr("id", "avengers")
            .attr("width", 1)
            .attr("height", 1)
            .append("svg:image")
            .attr("xlink:href", 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg')
            .attr("x", -50)
            .attr("y", -50);

        defs.append("svg:pattern")
            .attr("id", "knivesout")
            .attr("position", "absolute")
            .attr("width", 1)
            .attr("height", 1)
            .append("svg:image")
            .attr("xlink:href", 'https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg')
            .attr("x", -50)
            .attr("y", -45);

        defs.append("svg:pattern")
            .attr("id", "skyfall")
            .attr("position", "absolute")
            .attr("width", 1)
            .attr("height", 1)
            .append("svg:image")
            .attr("xlink:href", 'https://m.media-amazon.com/images/M/MV5BNDVhZmJiYWMtNmIzMC00ZWNiLTkzZDYtNGNlZmViMGM4OGExXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg')
            .attr("x", -50)
            .attr("y", -20);

        defs.append("svg:pattern")
            .attr("id", "nowyouseeme2")
            .attr("position", "absolute")
            .attr("width", 10)
            .attr("height", 10)
            .append("svg:image")
            .attr("xlink:href", 'https://m.media-amazon.com/images/M/MV5BYjhlNDljNTgtZjc4My00NmZmLTk2YzAtYWE5MDYwYjM4MTkzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg')
            .attr("x", -50)
            .attr("y", -50);

        defs.append("svg:pattern")
            .attr("id", "warmbodies")
            .attr("position", "absolute")
            .attr("width", 10)
            .attr("height", 10)
            .append("svg:image")
            .attr("xlink:href", 'https://m.media-amazon.com/images/M/MV5BYTc5ZjFhMDItYmViMi00YjI5LTgzNzctZjcxMDYzMWU2NTk2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg');

        defs.append("svg:pattern")
            .attr("id", "dolittle")
            .attr("position", "absolute")
            .attr("width", 10)
            .attr("height", 10)
            .append("svg:image")
            .attr("xlink:href", 'https://m.media-amazon.com/images/M/MV5BMDNkODA5ZGQtODczOS00OTQxLThhMTItMjk0ZmNhMDM0YjNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg')
            .attr("x", -50)
            .attr("y", -90);

        defs.append("svg:pattern")
            .attr("id", "spykids")
            .attr("position", "absolute")
            .attr("width", 10)
            .attr("height", 10)
            .append("svg:image")
            .attr("xlink:href", 'https://m.media-amazon.com/images/M/MV5BY2JhODU1NmQtNjllYS00ZmQwLWEwZjYtMTE5NjA1M2YyMzdjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg')
            .attr("x", 0)
            .attr("y", -50);

        defs.append("svg:pattern")
            .attr("id", "tattoo")
            .attr("position", "absolute")
            .attr("width", 10)
            .attr("height", 10)
            .append("svg:image")
            .attr("xlink:href", 'https://m.media-amazon.com/images/M/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw@@._V1_SX300.jpg')
            .attr("x", -30)
            .attr("y", -50);

        const color = (node) => {
            if (node.group == 2) {
            return d3.color("#01579b");
            }
            else if (node.id=="The Avengers"){
                return "url(#avengers)"; 
            }
            else if (node.id=="Knives Out"){
                return "url(#knivesout)"; 
            }
            else if (node.id=="Skyfall"){
                return "url(#skyfall)"; 
            }
            else if (node.id=="Now You See Me 2"){
                return "url(#nowyouseeme2)"; 
            }
            else if (node.id=="Warm Bodies"){
                return "url(#warmbodies)"; 
            }
            else if (node.id=="Dolittle"){
                return "url(#dolittle)"; 
            }
            else if (node.id=="Spy Kids"){
                return "url(#spykids)"; 
            }
            else if (node.id=="The Girl with the Dragon Tattoo"){
                return "url(#tattoo)"; 
            }
        }

        const radius = (node) => {
            if (node.group == 1) {
                return 100;
            }
            return 20;

        }



        const simulation = d3.forceSimulation(obj_nodes)
            .force("link", d3.forceLink().links(obj_links).id(d => { return d.index; }).distance(250))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width / 2, height / 2));

        var div = d3.select("body").append("div")
            .attr("class", "tooltip")
            .style("position", "absolute")
            .style("z-index", "10")
            .style("opacity", 0);


        const node = svg.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll("circle")
            .data(obj_nodes)
            .join("circle")
            .attr("r", radius)
            .attr("fill", color)
            .call(this.drag(simulation))
            .on('mouseover', function (d) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '.85');
                div.transition()
                     .duration(50)
                     .style("opacity", 1)
                div.html(d.id)
                    .style("left", d3.select(this).attr("cx")+ "px")		
                    .style("top",d3.select(this).attr("cy") + "px");
           })
           .on('mouseout', function (d, i) {
                d3.select(this).transition()
                    .duration('50')
                    .attr('opacity', '1');
                div.transition()
                     .duration('50')
                     .style("opacity", 0);
            });

            

        simulation.on("tick", () => {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y)
            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)

        });

        return svg.node();
    }

    componentDidMount() {
        const elem = document.getElementById("mysvg");
        elem.appendChild(this.chart(data.nodes, data.links));
    }

    render() {
        return (
        <div>
            <h3>Graph of movies connected by four main actors that play in them. Feel free to move it around! </h3>
            <div id="mysvg"/>
        </div>
        );
    }
}
export default Graph;