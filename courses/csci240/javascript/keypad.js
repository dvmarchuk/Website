// /**
//  * Created by DennisMarchuk on 2/14/2018.
//  */
//
// var one = function(){
//     if(document.getElementById('code').innerHTML === "Enter Code"){
//         document.getElementById('code').innerHTML = "1";
//     }
//     else{
//         addNum('1')
//     }
// };
//
// var two = function(){
//     if(document.getElementById('code').innerHTML === "Enter Code"){
//         document.getElementById('code').innerHTML = "2";
//     }
//     else{
//         addNum('2')
//     }
// };
// var three = function(){
//     if(document.getElementById('code').innerHTML === "Enter Code"){
//         document.getElementById('code').innerHTML = "3";
//     }
//     else{
//         addNum('3')
//     }
// };
//
// var four = function(){
//     if(document.getElementById('code').innerHTML === "Enter Code"){
//         document.getElementById('code').innerHTML = "4";
//     }
//     else{
//         addNum('4')
//     }
// };
//
// var five = function(){
//     if(document.getElementById('code').innerHTML === "Enter Code"){
//         document.getElementById('code').innerHTML = "5";
//     }
//     else{
//         addNum('5')
//     }
// };
//
// var six = function(){
//     if(document.getElementById('code').innerHTML === "Enter Code"){
//         document.getElementById('code').innerHTML = "6";
//     }
//     else{
//         addNum('6')
//     }
// };
//
//
// var seven = function(){
//     if(document.getElementById('code').innerHTML === "Enter Code"){
//         document.getElementById('code').innerHTML = "7";
//     }
//     else{
//         addNum('7')
//     }
// };
// var eight = function(){
//     if(document.getElementById('code').innerHTML === "Enter Code"){
//         document.getElementById('code').innerHTML = "8";
//     }
//     else{
//         addNum('8')
//     }
// };
//
// var nine = function(){
//     if(document.getElementById('code').innerHTML === "Enter Code"){
//         document.getElementById('code').innerHTML = "9";
//     }
//     else{
//         addNum('9')
//     }
// };
//
// var zero = function(){
//     if(document.getElementById('code').innerHTML === "Enter Code"){
//         document.getElementById('code').innerHTML = "0";
//     }
//     else{
//         addNum('0')
//     }
// };
//
//
// var addNum = function (num) {
//     var temp = document.getElementById('code').innerHTML;
//     document.getElementById('code').innerHTML = temp + num;
//     checkLength();
// };
//
// var checkLength = function(){
//     if(length()){
//         document.getElementById('code').innerHTML = "Enter Code";
//     }
// };
//
// var enter = function(){
//
//     if(document.getElementById("code").innerHTML === "0218"){
//         document.getElementById('code').innerHTML = "Access Granted";
//         window.open("https://goo.gl/Dfh79Z", "_blank", "width=600,height=400,top=100,left=100");
//
//     }
//     else{
//         setTimeout(timeout1, 1000);
//     }
// };
//
// var timeout1 = function(){
//     str = 'Access Denied';
//     result = str.fontcolor("red");
//     document.getElementById('code').innerHTML = result;
// };
//
// var length = function(){
//     if(document.getElementById('code').innerHTML.length > 4) {
//         return true
//     }
// };
//
// var back = function () {
//     if(document.getElementById('code').innerHTML.length <= 1 || document.getElementById('code').innerHTML.length > 6){
//         document.getElementById('code').innerHTML = "Enter Code";
//     }
//     else{
//         var num = document.getElementById('code').innerHTML.length;
//         num--;
//
//         console.log(num);
//
//         str = document.getElementById('code').innerHTML;
//         res = str.slice(0, num);
//         document.getElementById("code").innerHTML = res;
//
//         //document.getElementById('code').innerHTML.slice(1,2);
//     }
// };




var x = 43;
var y = 100;
var trick = true;

for(var i=0; i<6; i++) {
    d3.selectAll(".bar")
        .append("line")
        .attr("x1", x)
        .attr("x2", x)
        .attr("y1", 420)
        .attr("y2", y)
        .attr("stroke", "black")
        .attr("stroke-width", "30");

    x += 66;
    if(y>=380 && trick){
        trick = false;
    }

    if(trick) {
        y += 100;
    } else {
        y -= 100;
    }
}

d3.selectAll(".bar")
    .append("path")
    .attr("d", "M 0 0 v 420 h 420 ")
    .attr("fill", "transparent")
    .attr("stroke", "black")
    .attr("stroke-width", "4");

//PIE
d3.selectAll(".pie")
    .insert("path")
    .attr("d", "M 210 10 A 200 200 0 0 1 410 210 h -200 v -200 ")
    .attr("fill", "green")
    .attr("stroke", function(d, i, nodes){
        if(i === 0){
            return "grey";
        }
        return "";
    })
    .attr("stroke-width", function(d, i, nodes){
        if(i === 0){
            return "2";
        }
        return "";
    });

d3.selectAll(".pie")
    .insert("path")
    .attr("d", "M 410 210 A 200 200 0 0 1 210 410 v -200 h 200 ")
    .attr("fill", "blue")
    .attr("stroke", function(d, i, nodes){
        if(i === 0){
            return "grey";
        }
        return "";
    })
    .attr("stroke-width", function(d, i, nodes){
        if(i === 0){
            return "2";
        }
        return "";
    });

d3.selectAll(".pie")
    .insert("path")
    .attr("d", "M 210 410 A 200 200 0 0 1 10 210 h 200 v 200 ")
    .attr("fill", "red")
    .attr("stroke", function(d, i, nodes){
        if(i === 0){
            return "grey";
        }
        return "";
    })
    .attr("stroke-width", function(d, i, nodes){
        if(i === 0){
            return "2";
        }
        return "";
    });

d3.selectAll(".pie")
    .insert("path")
    .attr("d", "M 10 210 A 200 200 0 0 1 210 10 v 200 h -200 ")
    .attr("fill", "orange")
    .attr("stroke", function(d, i, nodes){
        if(i === 0){
            return "grey";
        }
        return "";
    })
    .attr("stroke-width", function(d, i, nodes){
        if(i === 0){
            return "2";
        }
        return "";
    });

d3.selectAll(".pie")
    .insert("circle")
    .attr("cx", "210")
    .attr("cy", "210")
    .attr("r", "200")
    .attr("fill", "transparent")
    .attr("stroke", "grey")
    .attr("stroke-width", "4");

d3.selectAll(".pie")
    .insert("text")
    .attr("text-anchor", "middle")
    .attr("x", "310")
    .attr("y", "125")
    .attr("font-size", "30")
    .attr("fill", "black")
    .text("grapes");

d3.selectAll(".pie")
    .insert("text")
    .attr("text-anchor", "middle")
    .attr("x", "310")
    .attr("y", "295")
    .attr("font-size", "30")
    .attr("fill", "black")
    .text("blueberries");

d3.selectAll(".pie")
    .insert("text")
    .attr("text-anchor", "middle")
    .attr("x", "110")
    .attr("y", "295")
    .attr("font-size", "30")
    .attr("fill", "black")
    .text("apples");

d3.selectAll(".pie")
    .insert("text")
    .attr("text-anchor", "middle")
    .attr("x", "110")
    .attr("y", "125")
    .attr("font-size", "30")
    .attr("fill", "black")
    .text("oranges");

d3.select(".bar")
    .clone(true)
    .attr("id", "newBar")
    .selectAll("line")
    .attr("stroke", "red");

d3.select("center")
    .append("hr");
d3.select("#newBar")
    .raise();

function buttonRemove(){
    d3.select("#newBar")
        .select("line")
        .remove();
}