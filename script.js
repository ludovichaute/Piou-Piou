var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

window.addEventListener("keydown", checkKeyPressed, false);

let width = 25;
let heigth = 25;



function checkKeyPressed(e) {
    
    if (e.keyCode == "39") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let x = 0;
        x++;
        console.log("droite "+x);
        ctx.fillStyle = '#0AA';
        ctx.translate(x, 0);
        var img = document.getElementById("canon"); 
        ctx.drawImage(img, 10, 10, width, heigth);         
    } if (e.keyCode == "37") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let e = 0;
        e--;
        console.log("gauche "+e);
        ctx.fillStyle = '#0AA';
        ctx.translate(e, 0); 
        var img = document.getElementById("canon"); 
        ctx.drawImage(img, 10, 10, width, heigth); 
    }
    
}   






