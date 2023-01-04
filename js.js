
let jugadorUno = prompt(" jugador uno  1.piedra 2.papel 3.tijera");
let jugadorDos = Math.floor(Math.random() * 3 + 1);

let piedra = 1;
let papel = 2;
let tijera = 3;


jugadorDos == 1 ? alert("La maquina jugó piedra") : false
jugadorDos == 2 ? alert("La maquina jugó papel") : false
jugadorDos == 3 ? alert("La maquina jugó tijera") : false


if(((jugadorUno == piedra) && (jugadorDos == tijera)) || 
((jugadorUno == papel) && (jugadorDos == piedra)) || 
((jugadorUno == tijera) && (jugadorDos == papel)) ){

    document.write("jugador Uno gana");
}

if(((jugadorDos == piedra) && (jugadorUno == tijera)) || 
((jugadorDos == papel) && (jugadorUno == piedra)) || 
((jugadorDos == tijera) && (jugadorUno == papel)) ){

    document.write("jugador Dos gana");
}


    if (jugadorUno == jugadorDos){
        document.write("empate");

    }
   
  
  


