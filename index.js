
let names = []; 
let globalData = [];
let i = 0;

window.onload = async function(){
    d3.csv("https://raw.githubusercontent.com/julioguzman19/DataVisualization/main/stats.csv", function(data){
    
    // Data being read one row at a time
    globalData[i] = data;  

    // Increment
    i++;
    });
}

function printData(){
    createNamesArray();
    //console.log(names[0]);
}

function createNamesArray(){
    for(let i = 0; i < globalData.length; i++){
        //console.log(globalData[i].NAME);
        names.push(globalData[i].NAME);
    }
}