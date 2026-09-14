const duracaoFoco = 25 * 60 * 1000; // 25 minutos em milisegundos
const duracaoPausa = 5 * 60 * 1000; // 5 minutos em milisegundos

// Estado
let modo = "foco"; // modo de foco ou de pausa
let horarioFim = null; // timestamp (ms) de quando a sessão atual termina
let idIntervalo = null; // referência do setInterval, para poder cancelar
let contadorCiclos = 0;

// Referências aos elementos do HTML
const rotuloSessao = document.getElementById("sessaoLabel");
const displayTempo = document.getElementById("tempoDisplay");
const elementoContadorCiclos = document.getElementById("contadorCiclo");
const btnIniciar = document.getElementById("btn-iniciar");
const btnPausar = document.getElementById("btn-pausar");
const btnReiniciar = document.getElementById("btn-reiniciar");

function formatarTempo(ms) {
  const totalSegundos = Math.max(0, Math.ceil(ms / 1000));
  const minutos = Math.floor(totalSegundos / 60);
  const segundos = totalSegundos % 60;

  return `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}

function atualizarTela() {
  const restante = horarioFim - Date.now();

  if (restante <= 0) {
    encerrarSessao();
    return;
  }

  displayTempo.textContent = formatarTempo(restante);
}

function encerrarSessao() {
  if (modo === "foco") {
    contadorCiclos++;
    elementoContadorCiclos.textContent = contadorCiclos;
    modo = "pausa";
    iniciarSessao(duracaoPausa);
  } else {
    modo = "foco";
    iniciarSessao(duracaoFoco);
  }
  rotuloSessao.textContent = modo;
}

function iniciarSessao(duracao) {
  horarioFim = Date.now() + duracao;
  clearInterval(idIntervalo);
  idIntervalo = setInterval(atualizarTela, 250); // 250ms é suficiente para parecer fluido
  displayTempo.textContent = formatarTempo(duracao);
}

//Controles
btnIniciar.addEventListener("click", () => {
  iniciarSessao(modo === "foco" ? duracaoFoco : duracaoPausa);
  btnIniciar.disabled = true;
  btnPausar.disabled = false;
});

btnPausar.addEventListener("click", () => {
  clearInterval(idIntervalo);
  btnIniciar.disabled = false;
  btnPausar.disabled = true;
});

btnReiniciar.addEventListener("click", () => {
  clearInterval(idIntervalo);
  modo = "foco";
  contadorCiclos = 0;
  elementoContadorCiclos.textContent = 0;
  rotuloSessao.textContent = modo;
  displayTempo.textContent = formatarTempo(duracaoFoco);
  btnIniciar.disabled = false;
  btnPausar.disabled = true;
});
