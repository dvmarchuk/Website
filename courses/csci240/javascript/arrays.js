/**
 * Created by DennisMarchuk on 2/5/2018.
 */

var list = Array(0,1,2,3,4,5,6,7,8,9,0);


console.log("for in loop");
for(var index in list){
    console.log(index);
}

console.log('for of loop');
for(var value of list){
    console.log(value);
}

console.log('even indicies array');
var g = function(item, index, array) {
    return item % 2 === 0;
};

var list = list.filter(g);
console.log(list.toString());


list2 = list;
for(value of list2){
    list2 += value + " - ";
}
console.log(list2);


list.unshift(7);
console.log(list);

list.pop();
console.log(list.toString());

console.log(list.length);




console.log("nonzero");


//     Sort the array in numeric order.
//     Print the contents of the array named nonZero to the console as a single string.

var g = function(item, index, array) {
    return item !== 0;
};

var nonZero = list.filter(g);
console.log(nonZero.toString());
nonZero.push(7, 8, 9);
console.log(nonZero.toString());
nonZero.reverse();
console.log(nonZero.toString());
nonZero.sort();
console.log(nonZero.toString());








