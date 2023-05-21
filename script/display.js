//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DISPLAY ELEMENTS//DISPLAY ELEMENTS//DISPLAY ELEMENTS//DISPLAY ELEMENTS//DISPLAY ELEMENTS//DISPLAY ELEMENTS//DISPLAY ELEMENTS
//DISPLAY ELEMENTS//DISPLAY ELEMENTS//DISPLAY ELEMENTS//DISPLAY ELEMENTS//DISPLAY ELEMENTS//DISPLAY ELEMENTS//DISPLAY ELEMENTS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function displayPacman() {
    document.getElementById('pacman').style.top = pacman.y + ofset.y + "px";
    document.getElementById('pacman').style.left = pacman.x + ofset.x + "px";
    displayWorld();
    displayCereza();
}

setInterval(displayTime, 1000);

function displayTime() {
    time++;
    if(time%10==0){
        agregarCereza()
    }
    document.getElementById('time').innerHTML = time;
    
}

function displayScore() {
    document.getElementById('score').innerHTML = score;
}

function displayVidas(fantasma) {

    condicion1= parseInt(Math.abs(fantasma.x-pacman.x))<6 && parseInt(Math.abs(fantasma.y-pacman.y))<6;
    if (condicion1) {
        vidas -= 1;
        pacman.x = 21;
        pacman.y = 21;

        fantasma1.x = 201;
        fantasma1.y = 221;
        fantasma2.x = 221;
        fantasma2.y = 221;
        fantasma3.x = 201;
        fantasma3.y = 221;
        fantasma4.x = 181;
        fantasma4.y = 221;

        displayPacman();
        if (vidas < 0) {
            alert("GAME OVER");
            location.reload();
        } else {}
    }
    document.getElementById('vidas').innerHTML = vidas;
}

function displayWorld() {
    var output = '';
    for (var i = 0; i < world.length; i++) {
        output += "<div class='row' id='row'>";
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] == 2) {
                output += "<div class='brick'></div>"
            } else if (world[i][j] == 1) {
                output += "<div class='coin'></div>"
            } else if (world[i][j] == 0) {
                output += "<div class='emptly'></div>"
            } else if (world[i][j] == 3) {
                output += "<div class='wall'></div>"
            }
        }
        output += "</div>";
    }
    document.getElementById('world').innerHTML = output;
    winner(world);
}

function displayFantasma(fantasma) {
    document.getElementById('fantasma' + fantasma.id).style.top = fantasma.y + ofset.y + "px";
    document.getElementById('fantasma' + fantasma.id).style.left = fantasma.x + ofset.x + "px";
    moveFantasma(fantasma);
    displayVidas(fantasma);
}

function displayCereza() {

    document.getElementById('cereza').style.top = cereza.y + ofset.y + "px";
    document.getElementById('cereza').style.left = cereza.x + ofset.x + "px";

    if (pacman.y == cereza.y && pacman.x == cereza.x) {
        cereza.z = 0;
        cereza.x = 0;
        cereza.y = 0;
        document.getElementById('cereza').style.position = "absolute";
        document.getElementById('cereza').style.display = "none";
        score += 1000;
        displayScore();
    }
}
