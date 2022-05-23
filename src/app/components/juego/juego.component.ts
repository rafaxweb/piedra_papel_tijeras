import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  gameStar = false;
  ganadorJuego = "nuevoJuego";

  constructor() { }

  ngOnInit(): void {

  }

  // Posibles elecciones
  onPiedra() {
    const playerChoice = "piedra";
    this.gamePlay(playerChoice);
  }

  onPapel() {
    const playerChoice = "papel";
    this.gamePlay(playerChoice);
  }

  onTijeras() {
    const playerChoice = "tijeras";
    this.gamePlay(playerChoice);
  }
  // Fin posibles elecciones

  gamePlay(eleccionJugador: String) {
    this.gameStar = true;
    let ganador = "empate";

    // Seleccionar la eleccion de la máquina
    const randomChoice = Math.ceil(Math.random() * 3);
    const eleccionMaquina = (randomChoice == 1) ? "tijeras" : (randomChoice == 2) ? "papel" : "piedra";

    // Probar quién gana
    if (eleccionJugador === "piedra") {
      if (eleccionMaquina === "papel") {
        ganador = "maquina";

      } else if (eleccionMaquina === "tijeras") {
        ganador = "jugador";
      }

    } else if (eleccionJugador === "papel") {
      if (eleccionMaquina === "tijeras") {
        ganador = "maquina";

      } else if (eleccionMaquina === "piedra") {
        ganador = "jugador";
      }

    } else if (eleccionJugador === "tijeras") {
      if (eleccionMaquina === "piedra") {
        ganador = "maquina";

      } else if (eleccionMaquina === "papel") {
        ganador = "jugador";
      }
    }

    this.ganadorJuego = ganador;

  }
}