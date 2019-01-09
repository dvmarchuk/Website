/**
 * Created by DennisMarchuk on 2/16/2018.
 */

var keyDown = function(event) {
    // console.log(event.keyCode);
    move(event.keyCode)
};

var x = 20;
var y = 20;
box.style.top = x + "px";
box.style.top = y + "px";


let move = function(num){
    switch(num){
        case 37://left
            x -= 10;
            box.style.left = x + "px";
            box.style.top = y + "px";
            break;
        case 38:
            y -= 10;
            box.style.left = x + "px";
            box.style.top = y + "px";
            break;
        case 39://right
            x += 10;
            box.style.left = x + "px";
            box.style.top = y + "px";
            break;
        case 40://down
            y += 10;
            box.style.left = x + "px";
            box.style.top = y + "px";
            break;
    }
};

window.addEventListener('keydown', keyDown);