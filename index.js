// Initializing Global Arrays to store data
let globalData = [];
let headersArr = ["NAME", "TEAM", "PPG","RPG", "APG","SPG","BPG","TOPG"];
let namesArr = []; 
let ppgArr = [];
let rpgArr = [];
let apgArr = [];
let spgArr = [];
let bpgArr = [];
let topgArr = [];
let dataObj = {headersArr,namesArr,ppgArr,rpgArr,apgArr,spgArr,bpgArr,topgArr};

// Initializing iterations for window on load
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
    createArrays();
    console.log(dataObj.namesArr[0]);
}

function createArrays(){
    for(let i = 0; i < globalData.length; i++){
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