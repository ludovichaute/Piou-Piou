var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

window.addEventListener("keydown", checkKeyPressed, false);

let width = 25;
let heigth = 25;

function checkKeyPressed(e) {
    if (e.keyCode == "39") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let right = 0;
        right += 2;
        console.log("droite "+right);
        ctx.fillStyle = '#0AA';
        ctx.translate(right, 0);
        var img = document.getElementById("canon_right"); 
        ctx.drawImage(img, 15, 15, width, heigth); 
    } 
    if (e.keyCode == "37") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let left = 0;
        left-= 2;
        console.log("gauche "+left);
        ctx.fillStyle = '#0AA';
        ctx.translate(left, 0); 
        var img = document.getElementById("canon_left"); 
        ctx.drawImage(img, 15, 15, width, heigth); 
    }
    if (e.keyCode == "32") {
        console.log("tir");
        
    }     
}   






