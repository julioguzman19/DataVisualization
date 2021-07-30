window.onload = async function(){
    d3.csv("https://raw.githubusercontent.com/julioguzman19/DataVisualization/main/stats.csv", function(data){
        console.log(data);
    });
}
