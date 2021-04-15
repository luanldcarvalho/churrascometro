let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

const calcBtn = document.querySelector(".calcular");

calcBtn.addEventListener("click", calcular);

function calcular() {
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qdtTotalCarne =
    carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;
  let qdtTotalCerveja = cervejaPP(duracao) * adultos;
  let qdtTotalBebidas =
    bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas;

  resultado.innerHTML = `<h3 class="titulo">Resultado:</h3>`;
  resultado.innerHTML = `<h3 class="titulo">Para ${adultos} adultos e ${criancas} crianças durante ${duracao} horas:</h3>`;
  resultado.innerHTML += `<p>${qdtTotalCarne / 1000} Kg de Carne.</p>`;
  resultado.innerHTML += `<p>${Math.ceil(
    qdtTotalCerveja / 1000
  )} L de Cerveja.</p>`;
  resultado.innerHTML += `<p>${Math.ceil(
    qdtTotalBebidas / 2000
  )} L de Bebidas.</p>`;
}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 700;
  } else {
    return 400;
  }
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidasPP(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
