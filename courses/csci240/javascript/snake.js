/**
 * Created by DennisMarchuk on 2/19/2018.
 */


// let makeGrid = function(x, y){
//     for(i = 0; i < x; i++){
//         outerBoard.style.left =
//     }
// };
//
// makeGrid(10,10);
var counter = 0;


let keyDown = function(event) {
    // console.log(event.keyCode);
    // do {
        move(event.keyCode)
    // }while(1)
    // if(counter < 100){
    //     move(event.keyCode)
    // }

     // while(0){
    // for(i = 0; i<10; i++){
    //     setTimeout(move(event.keyCode), 1000);
    // }
    // }
};

let randomPos = function(){

        tempX = Math.floor(Math.random() * 11);
        x = tempX * 10;

        tempY = Math.floor(Math.random() * 11);
        y = tempY * 10;
};


let foodPos = function(){
    tempX = Math.floor(Math.random() * 11);
    foodX = tempX * 10;

    tempY = Math.floor(Math.random() * 11);
    foodY = tempY * 10;
};


let start = function (){
    let x;
    let y;
    randomPos();
    foodPos();

    food.style.left = foodY + "px";
    food.style.top = foodY + "px";

    snake.style.left = x + "px";
    snake.style.top = y + "px";
};



let checkCollision = function (){
    if(food.style.left === snake.style.left && food.style.top === snake.style.top){
        console.log("hit");
        add();
        foodPos();
        console.log(snake.style.left);
    }

    else if(snake.style.left === 10){
        console.log("Error")
    }
};


let add = function(){
    foodPos();
    y += 10;
    console.log(y);
    snake.style.height = y + "px";
    counter++;
};

let move = function(num){
    switch(num){
        case 37://left
            x -= 10;
            snake.style.left = x + "px";
            snake.style.top = y + "px";
            break;
        case 38:
            y -= 10;
            snake.style.left = x + "px";
            snake.style.top = y + "px";
            break;
        case 39://right
            x += 10;
            snake.style.left = x + "px";
            snake.style.top = y + "px";
            break;
        case 40://down
            y += 10;
            snake.style.left = x + "px";
            snake.style.top = y + "px";
            break;
    }
    checkCollision();
};


window.addEventListener('keydown', keyDown);

start();