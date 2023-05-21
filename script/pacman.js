////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PACMAN MOVE//PACMAN MOVE//PACMAN MOVE//PACMAN MOVE//PACMAN MOVE//PACMAN MOVE//PACMAN MOVE//PACMAN MOVE//PACMAN MOVE//PACMAN MOVE//
//PACMAN MOVE//PACMAN MOVE//PACMAN MOVE//PACMAN MOVE//PACMAN MOVE//PACMAN MOVE//PACMAN MOVE//PACMAN MOVE//PACMAN MOVE//PACMAN MOVE//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var autoMove_temp=-1;
var localTimeMove = [];

document.onkeydown = function(e) {
    if (e.keyCode == 37) {
        autoMove_temp = 0;
    } else if (e.keyCode == 39) {
        autoMove_temp = 2;
    } else if (e.keyCode == 40) {
        autoMove_temp = 3;
    } else if (e.keyCode == 38) {
        autoMove_temp = 1;
    }
}

function movePacman() {
    movimiento(pacman,autoMove_temp)

    if (world[pacman.yworld][pacman.xworld] == 1) {
        world[pacman.yworld][pacman.xworld] = 0;
        score += 10;
    }
    displayScore();
    displayPacman();
    displayVidas(fantasma1);
    displayVidas(fantasma2);
    displayVidas(fantasma3);
    displayVidas(fantasma4);
}

//////////////////////////////////////////////////////////////////////////////
//////FUNCION MOVIMIENTO////FUNCION MOVIMIENTO////FUNCION MOVIMIENTO//////////
/////////////////////////////////////////////////////////////////////////////

function movimiento(elemento,direccion){
    compararmapa(elemento,escala)

    if ((elemento.x-1)%20==0 && (elemento.y-1)%20==0){
        elemento.move=direccion;
    }
    switch (elemento.move) {
        case 0: // Mueve Izquierda
            if((world[elemento.yworld][elemento.xworld-1] != 2) && world[elemento.yworld][elemento.xworld-1] != 3){
                elemento.x--;
            }
            if (elemento==pacman){
                document.getElementById('pacman').style.transform = "rotate(180deg)";
            }
            if(elemento.y==281 && elemento.x==0){
                elemento.x+=400;
            }
            break;
        case 1: // Mueve Arriba
            if ((world[elemento.yworld-1][elemento.xworld] != 2) && world[elemento.yworld-1][elemento.xworld] != 3){
                elemento.y--;
            }
            if (elemento==pacman){
                document.getElementById('pacman').style.transform = "rotate(270deg)";
            }
            break;
        case 2: // Mueve Derecha
            if ((world[elemento.yworld][elemento.xworld + 1] != 2) && world[elemento.yworld][elemento.xworld + 1] != 3){
                elemento.x++;
            }
            if (elemento==pacman){
                document.getElementById('pacman').style.transform = "rotate(0deg)";
            }
            if(elemento.y==281 && elemento.x==400){
                elemento.x-=400;
            }
            break;
        case 3: // Mueve Abajo
            if ((world[elemento.yworld+1][elemento.xworld] != 2) && world[elemento.yworld+1][elemento.xworld] != 3){
                elemento.y++;
            }
            if (elemento==pacman){
                document.getElementById('pacman').style.transform = "rotate(90deg)";
            }
            break;
    }
}

function restriccionHorizontal(fantasma){
    if ((fantasma.x-1)%20==0 && (fantasma.y-1)%20==0){
        direccion=randomMove = Math.floor(Math.random() * 4);
        if(direccion == 0 || direccion ==2) {
            if (fantasma.move != 0 && fantasma.move != 2){
            fantasma.move=direccion;
        }else{
            while(direccion==0 || direccion ==2)
            direccion=randomMove = Math.floor(Math.random() * 4);
        }
        fantasma.move=direccion;
    }}
}  

function restriccionVertical(fantasma){
    if ((fantasma.x-1)%20==0 && (fantasma.y-1)%20==0){
        direccion=randomMove = Math.floor(Math.random() * 4);
        if(direccion == 1 || direccion ==3) {
            if (fantasma.move != 1 && fantasma.move != 3){
            fantasma.move=direccion;
        }else{
            while(direccion==1 || direccion ==3)
            direccion=randomMove = Math.floor(Math.random() * 4);
        }
        fantasma.move=direccion;
    }}
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FANTASMA MOVE //FANTASMA MOVE//FANTASMA MOVE//FANTASMA MOVE//FANTASMA MOVE//FANTASMA MOVE//FANTASMA MOVE//FANTASMA MOVE//FANTASMA MOVE//
//FANTASMA MOVE //FANTASMA MOVE//FANTASMA MOVE//FANTASMA MOVE//FANTASMA MOVE//FANTASMA MOVE//FANTASMA MOVE//FANTASMA MOVE//FANTASMA MOVE//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function moveFantasma(fantasma){
    restriccionFanstama(fantasma)
}

//////////////////////////////////////////////////////////////////////////////////////
//////RESTRICCIÓN FANTASMA////RESTRICCIÓN FANTASMA////RESTRICCIÓN FANTASMA//////////
/////////////////////////////////////////////////////////////////////////////////////

function restriccionFanstama(fantasma){
    compararmapa(fantasma,escala)
    if (fantasma.x==201 && fantasma.y==221){
        fantasma.move=1;
    }
    switch (fantasma.move) {
        case 0: // Mueve Izquierda
            if((world[fantasma.yworld][fantasma.xworld-1] != 2) && world[fantasma.yworld][fantasma.xworld-1] != 3){
                movimiento(fantasma,fantasma.move)
                
            } else{0
                restriccionHorizontal(fantasma)
            }
            break;
        case 1: // Mueve Arriba
            if ((world[fantasma.yworld-1][fantasma.xworld] != 2) && world[fantasma.yworld-1][fantasma.xworld] != 3){
                movimiento(fantasma,fantasma.move)
            } else{
                restriccionVertical(fantasma)
            }
            break;

        case 2: // Mueve Derecha
            if ((world[fantasma.yworld][fantasma.xworld + 1] != 2) && world[fantasma.yworld][fantasma.xworld + 1] != 3){
                movimiento(fantasma,fantasma.move)
            } else{
                restriccionHorizontal(fantasma)
            }
            break;
        case 3: // Mueve Abajo
            if ((world[fantasma.yworld+1][fantasma.xworld] != 2) && world[fantasma.yworld+1][fantasma.xworld] != 3){
                movimiento(fantasma,fantasma.move)
            }else{
                restriccionVertical(fantasma)
            }
            break;
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//OTRAS FUNCIONES////OTRAS FUNCIONES////OTRAS FUNCIONES////OTRAS FUNCIONES////OTRAS FUNCIONES////OTRAS FUNCIONES//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function compararmapa(elemento,escala){
    if ((elemento.x-1)%20==0 && (elemento.y-1)%20==0){
            elemento.xworld=Math.trunc(elemento.x/escala.x);
            elemento.yworld=Math.trunc(elemento.y/escala.y);
        }
}

function winner(world) {
    var win = 0;
    for (let i = 0; i < world.length; i++) {
        for (let j = 0; j < world[i].length; j++) {
            if (world[j][i] == 1) {
                win = 1;
            }
        }
    }
    if (win == 0) {
        alert("Haz Ganado");
        location.reload();
    }
}

function agregarCereza(){
    cereza.x=Math.floor(Math.random()*21)*20+1;
    cereza.y=Math.floor(Math.random()*20)*20+1;
    while(world[(cereza.y-1)/20][(cereza.x-1)/20] ==2 || world[(cereza.y-1)/20][(cereza.x-1)/20] == 3){
        cereza.x=Math.floor(Math.random()*21)*20+1;
        cereza.y=Math.floor(Math.random()*20)*20+1;
        cereza.z=1;
        document.getElementById('cereza').style.display = "block";
    }
    displayCereza()
}

