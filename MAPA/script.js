// Constantes
const consumption = {
  HOMEM: {
    BOVINA: 0.5,
    FRANGO: 0.2,
    LINGUICA: 0.2,
    REFRI: 0.3,
    CERVEJA: 0.8,
  },
  MULHER: {
    BOVINA: 0.3,
    FRANGO: 0.2,
    LINGUICA: 0.2,
    REFRI: 0.4,
    CERVEJA: 0.5,
  },
  CRIANCA: {
    BOVINA: 0.2,
    FRANGO: 0.1,
    LINGUICA: 0.2,
    REFRI: 0.2,
    CERVEJA: 0,
  },
};

function calcular(event) {
  // Impedir que a pagina faça reload
  event.preventDefault();

  
  //   Extrair campos do formulário para objeto
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  const { homem, mulher, crianca } = data;

  //   Converter os valores para inteiro
  const homemQtd = +homem;
  const mulherQtd = +mulher;
  const criancaQtd = +crianca;

  // Valida os valores
  if (!areAllNumbersGreaterThanZero(homemQtd, mulherQtd, criancaQtd)) {
    alert("Os valores devem ser números maiores que 0!");
    return;
  }

  //  Calcular quantidade
  const bovino =
    homemQtd * consumption.HOMEM.BOVINA +
    mulherQtd * consumption.MULHER.BOVINA +
    criancaQtd * consumption.CRIANCA.BOVINA;

  const frango =
    homemQtd * consumption.HOMEM.FRANGO +
    mulherQtd * consumption.MULHER.FRANGO +
    criancaQtd * consumption.CRIANCA.FRANGO;

  const linguica =
    homemQtd * consumption.HOMEM.LINGUICA +
    mulherQtd * consumption.MULHER.LINGUICA +
    criancaQtd * consumption.CRIANCA.LINGUICA;

  const refrigerante =
    homemQtd * consumption.HOMEM.REFRI +
    mulherQtd * consumption.MULHER.REFRI +
    criancaQtd * consumption.CRIANCA.REFRI;

  const cerveja =
    homemQtd * consumption.HOMEM.CERVEJA +
    mulherQtd * consumption.MULHER.CERVEJA +  
    criancaQtd * consumption.CRIANCA.CERVEJA;

  //  Atualizar valor na página
  document.getElementById("bovina").innerText = `${+bovino.toFixed(2)} Kg de carne bovina`;
  document.getElementById("bovina").parentElement.querySelector("img").classList.remove("hidden");

  document.getElementById("frango").innerText = `${+frango.toFixed(2)} Kg de frango`;
  document.getElementById("frango").parentElement.querySelector("img").classList.remove("hidden");

  document.getElementById("linguica").innerText = `${+linguica.toFixed(2)} Kg de linguica`;
  document.getElementById("linguica").parentElement.querySelector("img").classList.remove("hidden");

  document.getElementById("refrigerante").innerText = `${+refrigerante.toFixed(2)} L de refrigerante`;
  document.getElementById("refrigerante").parentElement.querySelector("img").classList.remove("hidden");

  document.getElementById("cerveja").innerText = `${+cerveja.toFixed(2)} L de cerveja`;
  document.getElementById("cerveja").parentElement.querySelector("img").classList.remove("hidden");
}

// Checa se todos os valores sao numeros maiores que zero
function areAllNumbersGreaterThanZero(...variables) {
  return variables.every((variable) => {
    const num = +variable;
    return !isNaN(num) && num > 0;
  });
}
