
let jugadorUno = prompt(" jugador uno  1.piedra 2.papel 3.tijera");
let jugadorDos = Math.floor(Math.random() * 3 + 1);

let piedra = 1;
let papel = 2;
let tijera = 3;


if (jugadorUno == piedra){

    if(jugadorDos == piedra){

        let jugada = alert(`el jugador 2 eligio piedra`);
        document.write("empate");

    }
    else if(jugadorDos == papel) 
    {
        let jugada = alert(`el jugador 2 eligio papel`);
        document.write("jugador dos gana");
    }
    else if(jugadorDos == tijera) 
    {
        let jugada = alert(`el jugador 2 eligio tijera`);
        document.write("jugador uno gana");
    }
  
  
}

if (jugadorUno == papel){

    if(jugadorDos == piedra){
        let jugada = alert(`el jugador 2 eligio piedra`);
        document.write("jugador uno gana");

    }
    else if(jugadorDos == papel) 
    {
        let jugada = alert(`el jugador 2 eligio papel`);
        document.write("empate");
    }
    else if(jugadorDos == tijera) 
    {
        let jugada = alert(`el jugador 2 eligio tijera`);
        document.write("jugador dos gana");
    }
  
  
}

if (jugadorUno == tijera){

    if(jugadorDos == piedra){
        let jugada = alert(`el jugador 2 eligio piedra`);
        document.write("jugador dos gana");
      

    }
    else if(jugadorDos == papel) 
    {
        let jugada = alert(`el jugador 2 eligio papel`);
        document.write("jugador uno gana");
    }
    else if(jugadorDos == tijera) 
    {
        let jugada = alert(`el jugador 2 eligio tijera`);
        document.write("empate");
        
    }
  
  
}