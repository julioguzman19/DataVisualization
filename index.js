// Initializing Global Arrays to store data
let globalData = [];
let headersArr = ["NAME", "TEAM", "PPG", "RPG", "APG", "SPG", "BPG", "TOPG"];
let namesArr = [];
let ppgArr = [];
let rpgArr = [];
let apgArr = [];
let spgArr = [];
let bpgArr = [];
let topgArr = [];
let dataObj = { headersArr, namesArr, ppgArr, rpgArr, apgArr, spgArr, bpgArr, topgArr };

// Initializing iterations for window on load
let i = 0;

window.onload = async function () {
    d3.csv("https://raw.githubusercontent.com/julioguzman19/DataVisualization/main/stats.csv", function (data) {

        // Data being read one row at a time
        globalData[i] = data;

        // Increment
        i++;

    });
}

function printData() {
    createArrays();
    console.log(dataObj.namesArr[0]);

    //
    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 30, bottom: 40, left: 100 },
        width = 460 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // sort data
    dataObj.ppgArr.sort(function (b, a) {
        return a - b;
    });

    // Add X axis
    var x = d3.scaleLinear()
        // Range
        .domain([0, 40])
        .range([0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

    // Y axis
    var y = d3.scaleBand()
        .range([0, height])
        .domain(globalData.map(function (d) { return d.NAME; }))
        .padding(1);
    svg.append("g")
        .call(d3.axisLeft(y))

    // Lines
    svg.selectAll("myline")
        .data(globalData)
        .enter()
        .append("line")
        .attr("x1", function (d) { return x(d.PPG); })
        .attr("x2", x(0))
        .attr("y1", function (d) { return y(d.NAME); })
        .attr("y2", function (d) { return y(d.NAME); })
        .attr("stroke", "grey")

    // Circles
    svg.selectAll("mycircle")
        .data(dataObj.ppgArr)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return x(d.PPG); })
        .attr("cy", function (d) { return y(d.NAME); })
        .attr("r", "7")
        .style("fill", "#69b3a2")
        .attr("stroke", "black")



}

function createArrays() {
    for (let i = 0; i < globalData.length; i++) {
        //Pushing csv column data into arrays
        namesArr.push(globalData[i].NAME);
        ppgArr.push(globalData[i].PPG);
        rpgArr.push(globalData[i].RPG);
        apgArr.push(globalData[i].APG);
        spgArr.push(globalData[i].SPG);
        bpgArr.push(globalData[i].BPG);
        topgArr.push(globalData[i].TOPG);
    }
}