var Jugadores = [{name: "Enemigo", choice: "ninguna", resultGame:"", imgChoice: ""},{name: "Player", choice: "ninguna", resultGame:"", imgChoice: ""}]; //Array con la información de los jugadores

//var OpcionesEnemigas =["Piedra","Papel","Tijeras"]; //Array con las opciones a elegir para el enemigo

var nombreJugador=""; //Nombre del jugador por defecto inicializado

function Take_data_Piedra(){ //Función que toma la información al pulsar el botón de Piedra
    nombreJugador=document.getElementById("namePlay").value;
    if(nombreJugador==""){ //Control de errores
        alert("Debes indicar tu nombre");
    }
    else{
    var opcion1="Piedra"

    var urlImg="img/boton_piedra.png";
    Asignar_name_Choice_Img(nombreJugador,opcion1,urlImg);
    }
}

function Take_data_Papel(){ //Función que toma la información al pulsar el botón de Papel
    nombreJugador=document.getElementById("namePlay").value;
    if(nombreJugador==""){ //Control de errores
        alert("Debes indicar tu nombre");
    }
    else{
    var opcion2="Papel"

    var urlImg="img/boton_papel.png";
    Asignar_name_Choice_Img(nombreJugador,opcion2,urlImg);
    }
}

function Take_data_Tijeras(){ //Función que toma la información al pulsar el botón de Tijeras
    nombreJugador=document.getElementById("namePlay").value;
    if(nombreJugador==""){ //Control de errores
        alert("Debes indicar tu nombre");
    }
    else{
    var opcion3="Tijeras"

    var urlImg="img/boton_tijeras.png";
    Asignar_name_Choice_Img(nombreJugador,opcion3,urlImg) //Llama a la función de asignación de nombre y opción del jugador
    }
}

function Asignar_name_Choice_Img(player,choice,laurl) { //Función que asigna un nombre y una opción jugada al jugador principal
    Jugadores[1].name=player;  
    Jugadores[1].choice=choice;
    Jugadores[1].imgChoice=laurl;  

    Get_datos_enemigos(); //Llama a los datos enemigos.
}

function Get_datos_enemigos(){ //Función que genera la respuesta aleatoria del enemigo
    var opcionDatosEnemigos = Math.floor(Math.random() * (3 - 0)) + 0; //Genera un número aleatorio para las opciones

    switch (opcionDatosEnemigos) { //Switch que evalua las opcionnes y le asigna al Enemigo una opción de juego
        case 0:
            Jugadores[0].choice="Piedra";
            Jugadores[0].imgChoice="img/boton_piedra.png";
            break;
        
        case 1:
            Jugadores[0].choice="Papel";
            Jugadores[0].imgChoice="img/boton_papel.png";
            break;
        
        case 2:
            Jugadores[0].choice="Tijeras";
            Jugadores[0].imgChoice="img/boton_tijeras.png";
            break;
    
        default:
            break;
    }
    console.log(Jugadores[1].name,Jugadores[1].choice,Jugadores[0].choice); //Pruebas
    Mostrar_resultados();

}

function Mostrar_resultados() {

    var resultadofinaljuego ="";

    if(Jugadores[1].choice==Jugadores[0].choice){
        resultadofinaljuego="empatado con tu enemigo"
    }
    else if(Jugadores[1].choice=="Piedra" && Jugadores[0].choice!="Papel"){
        resultadofinaljuego="Ganado, Enhorabuena ^^"
    }
    else if(Jugadores[1].choice=="Papel" && Jugadores[0].choice!="Tijeras"){
        resultadofinaljuego="Ganado, Enhorabuena ^^"
    }
    else if(Jugadores[1].choice=="Tijeras" && Jugadores[0].choice!="Piedra"){
        resultadofinaljuego="Ganado, Enhorabuena ^^"
    }
    else{
        resultadofinaljuego="Perdido, ¡Vuelve a intentarlo!"
    }


    document.getElementById("opciones").style.display="none";
    document.getElementById("tablero").style.display="inline";
    document.getElementById("tablero").innerHTML="<h2>"+Jugadores[1].name +" ha jugado: "+ Jugadores[1].choice +"</h2><img src="+Jugadores[1].imgChoice+"><img src="+Jugadores[0].imgChoice+"><h2>Y el enemigo ha jugado: "+ Jugadores[0].choice+" ----- Has "+resultadofinaljuego+"</h2>";
}