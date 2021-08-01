// Initializing Global Arrays to store data
let globalData = [];
// let headersArr = ["NAME", "TEAM", "PPG", "RPG", "APG", "SPG", "BPG", "TOPG"];
// let namesArr = [];
// let ppgArr = [];
// let rpgArr = [];
// let apgArr = [];
// let spgArr = [];
// let bpgArr = [];
// let topgArr = [];
let dataObj = [];

// Initializing iterations for window on load
let i = 0;

window.onload = async function () {
    d3.csv("https://raw.githubusercontent.com/julioguzman19/DataVisualization/main/statsDelete.csv", function (data) {

        // Data being read one row at a time
        globalData[i] = data;

        // Increment
        i++;

    });
}

function printData() {
    createArrays();
    //console.log(dataObj.namesArr[0]);

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
    dataObj.sort(function (b, a) {
        return a.apg - b.apg;
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
        .domain(dataObj.map(function (d) { return d.name; }))
        .padding(1);
    svg.append("g")
        .call(d3.axisLeft(y))

    // Lines
    svg.selectAll("myline")
        .data(dataObj)
        .enter()
        .append("line")
        .attr("x1", function (d) { return x(d.apg); })
        .attr("x2", x(0))
        .attr("y1", function (d) { return y(d.name); })
        .attr("y2", function (d) { return y(d.name); })
        .attr("stroke", "grey")

    // Circles
    svg.selectAll("mycircle")
        .data(dataObj)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return x(d.apg); })
        .attr("cy", function (d) { return y(d.name); })
        .attr("r", "7")
        .style("fill", "#69b3a2")
        .attr("stroke", "black")



}

function createArrays() {
    let name,ppg,rpg,apg,spg,bpg,topg;

    for (let i = 0; i < globalData.length; i++) {
        //Pushing csv column data into arrays
        // namesArr.push(globalData[i].NAME);
        // ppgArr.push(globalData[i].PPG);
        // rpgArr.push(globalData[i].RPG);
        // apgArr.push(globalData[i].APG);
        // spgArr.push(globalData[i].SPG);
        // bpgArr.push(globalData[i].BPG);
        // topgArr.push(globalData[i].TOPG);

        // Creating temp vars
        name = globalData[i].NAME;
        ppg = globalData[i].PPG;
        rpg = globalData[i].RPG;
        apg = globalData[i].APG;
        spg = globalData[i].SPG;
        bpg = globalData[i].BPG;
        topg = globalData[i].TOPG; 

        // Adding temp vars to objects
        dataObj[i] = {name:name,ppg:ppg,rpg:rpg,apg:apg,spg:spg,bpg,bpg,topg:topg};

    }
    
}