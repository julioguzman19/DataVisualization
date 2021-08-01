// Initializing Global Arrays to store data
let globalData = [];
let dataArr = [];
let dataArrTopTen = [];
let userSelection;

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

function callFunctionsOnClick() {
    createDataArray();
    sortDataArray();
    setTopTenDataArray();
    createVisual();
}

function createVisual() {
    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 30, bottom: 40, left: 200 },
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

    // Plot based on userSelection
    switch (userSelection) {
        // Case
        case "PointsPerGame":
            // Add X axis
            var x = d3.scaleLinear()
                // Range
                .domain([0, 45])
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
                .domain(dataArrTopTen.map(function (d) { return d.name; }))
                .padding(1);
            svg.append("g")
                .call(d3.axisLeft(y))

            // Lines
            svg.selectAll("myline")
                .data(dataArrTopTen)
                .enter()
                .append("line")
                .attr("x1", function (d) { return x(d.ppg); })
                .attr("x2", x(0))
                .attr("y1", function (d) { return y(d.name); })
                .attr("y2", function (d) { return y(d.name); })
                .attr("stroke", "grey")

            // Circles
            svg.selectAll("mycircle")
                .data(dataArrTopTen)
                .enter()
                .append("circle")
                .attr("cx", function (d) { return x(d.ppg); })
                .attr("cy", function (d) { return y(d.name); })
                .attr("r", "7")
                .style("fill", "#FF7F7F")
                .attr("stroke", "black")

            break;

        // Case
        case "ReboundsPerGame":
            // Add X axis
            var x = d3.scaleLinear()
                // Range
                .domain([0, 20])
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
                .domain(dataArrTopTen.map(function (d) { return d.name; }))
                .padding(1);
            svg.append("g")
                .call(d3.axisLeft(y))

            // Lines
            svg.selectAll("myline")
                .data(dataArrTopTen)
                .enter()
                .append("line")
                .attr("x1", function (d) { return x(d.rpg); })
                .attr("x2", x(0))
                .attr("y1", function (d) { return y(d.name); })
                .attr("y2", function (d) { return y(d.name); })
                .attr("stroke", "grey")

            // Circles
            svg.selectAll("mycircle")
                .data(dataArrTopTen)
                .enter()
                .append("circle")
                .attr("cx", function (d) { return x(d.rpg); })
                .attr("cy", function (d) { return y(d.name); })
                .attr("r", "7")
                .style("fill", "#FF7F7F")
                .attr("stroke", "black")

            break;

        // Case
        case "AssistsPerGame":
            // Add X axis
            var x = d3.scaleLinear()
                // Range
                .domain([0, 20])
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
                .domain(dataArrTopTen.map(function (d) { return d.name; }))
                .padding(1);
            svg.append("g")
                .call(d3.axisLeft(y))

            // Lines
            svg.selectAll("myline")
                .data(dataArrTopTen)
                .enter()
                .append("line")
                .attr("x1", function (d) { return x(d.apg); })
                .attr("x2", x(0))
                .attr("y1", function (d) { return y(d.name); })
                .attr("y2", function (d) { return y(d.name); })
                .attr("stroke", "grey")

            // Circles
            svg.selectAll("mycircle")
                .data(dataArrTopTen)
                .enter()
                .append("circle")
                .attr("cx", function (d) { return x(d.apg); })
                .attr("cy", function (d) { return y(d.name); })
                .attr("r", "7")
                .style("fill", "#FF7F7F")
                .attr("stroke", "black")

            break;
        
        // Case
        case "StealsPerGame":
            // Add X axis
            var x = d3.scaleLinear()
                // Range
                .domain([0, 5])
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
                .domain(dataArrTopTen.map(function (d) { return d.name; }))
                .padding(1);
            svg.append("g")
                .call(d3.axisLeft(y))

            // Lines
            svg.selectAll("myline")
                .data(dataArrTopTen)
                .enter()
                .append("line")
                .attr("x1", function (d) { return x(d.spg); })
                .attr("x2", x(0))
                .attr("y1", function (d) { return y(d.name); })
                .attr("y2", function (d) { return y(d.name); })
                .attr("stroke", "grey")

            // Circles
            svg.selectAll("mycircle")
                .data(dataArrTopTen)
                .enter()
                .append("circle")
                .attr("cx", function (d) { return x(d.spg); })
                .attr("cy", function (d) { return y(d.name); })
                .attr("r", "7")
                .style("fill", "#FF7F7F")
                .attr("stroke", "black")

            break;

        // Case
        case "BlocksPerGame":
            // Add X axis
            var x = d3.scaleLinear()
                // Range
                .domain([0, 5])
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
                .domain(dataArrTopTen.map(function (d) { return d.name; }))
                .padding(1);
            svg.append("g")
                .call(d3.axisLeft(y))

            // Lines
            svg.selectAll("myline")
                .data(dataArrTopTen)
                .enter()
                .append("line")
                .attr("x1", function (d) { return x(d.bpg); })
                .attr("x2", x(0))
                .attr("y1", function (d) { return y(d.name); })
                .attr("y2", function (d) { return y(d.name); })
                .attr("stroke", "grey")

            // Circles
            svg.selectAll("mycircle")
                .data(dataArrTopTen)
                .enter()
                .append("circle")
                .attr("cx", function (d) { return x(d.bpg); })
                .attr("cy", function (d) { return y(d.name); })
                .attr("r", "7")
                .style("fill", "#FF7F7F")
                .attr("stroke", "black")

            break;
        
        // Case
        case "TurnoversPerGame":
            // Add X axis
            var x = d3.scaleLinear()
                // Range
                .domain([0, 5])
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
                .domain(dataArrTopTen.map(function (d) { return d.name; }))
                .padding(1);
            svg.append("g")
                .call(d3.axisLeft(y))

            // Lines
            svg.selectAll("myline")
                .data(dataArrTopTen)
                .enter()
                .append("line")
                .attr("x1", function (d) { return x(d.topg); })
                .attr("x2", x(0))
                .attr("y1", function (d) { return y(d.name); })
                .attr("y2", function (d) { return y(d.name); })
                .attr("stroke", "grey")

            // Circles
            svg.selectAll("mycircle")
                .data(dataArrTopTen)
                .enter()
                .append("circle")
                .attr("cx", function (d) { return x(d.topg); })
                .attr("cy", function (d) { return y(d.name); })
                .attr("r", "7")
                .style("fill", "#FF7F7F")
                .attr("stroke", "black")
    }

}

function createDataArray() {
    let name, ppg, rpg, apg, spg, bpg, topg;

    // Loop through globalData array created by d3.csv
    for (let i = 0; i < globalData.length; i++) {

        // Creating temp vars
        name = globalData[i].NAME;
        ppg = globalData[i].PPG;
        rpg = globalData[i].RPG;
        apg = globalData[i].APG;
        spg = globalData[i].SPG;
        bpg = globalData[i].BPG;
        topg = globalData[i].TOPG;

        // Adding temp vars to objects
        dataArr[i] = { name: name, ppg: ppg, rpg: rpg, apg: apg, spg: spg, bpg, bpg, topg: topg };

    }

}

function sortDataArray() {
    // Get user selection
    userSelection = document.getElementById("stats").value;

    // Sort based on userSelection
    switch (userSelection) {
        case "PointsPerGame":
            // Sort 
            dataArr.sort(function (b, a) {
                return a.ppg - b.ppg;
            });

            break;
        case "ReboundsPerGame":
            // Sort 
            dataArr.sort(function (b, a) {
                return a.rpg - b.rpg;
            });
            break;
        case "AssistsPerGame":
            // Sort 
            dataArr.sort(function (b, a) {
                return a.apg - b.apg;
            });
            break;
        case "StealsPerGame":
            // Sort 
            dataArr.sort(function (b, a) {
                return a.spg - b.spg;
            });
            break;
        case "BlocksPerGame":
            // Sort 
            dataArr.sort(function (b, a) {
                return a.bpg - b.bpg;
            });
            break;
        case "TurnoversPerGame":
            // Sort 
            dataArr.sort(function (b, a) {
                return a.topg - b.topg;
            });
    }

}

function setTopTenDataArray(){
    for(let i = 0; i <= 10; i++){
        dataArrTopTen[i] = dataArr[i];
    }
}
