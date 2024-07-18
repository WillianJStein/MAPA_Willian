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
  if (!isAnyNumbersGreaterThanZero(homemQtd, mulherQtd, criancaQtd)) {
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
    mulherQtd * consumption.MULHER.CERVEJA;

  //  Atualizar valor na página
 updateResult("bovina", bovino, "Kg de carne bovina");
  updateResult("frango", frango, "Kg de frango");
  updateResult("linguica", linguica, "Kg de linguica");
  updateResult("refrigerante", refrigerante, "L de refrigerante");
  updateResult("cerveja", cerveja, "L de cerveja");
}

function updateResult(id, value, unit) {
  const element = document.getElementById(id);
  const imgElement = element.parentElement.querySelector("img");

  if (value > 0) {
    element.innerText = `${+value.toFixed(2)} ${unit}`;
    imgElement.classList.remove("hidden");
  } else {
    element.innerText = "";
    imgElement.classList.add("hidden");
  }
}


// Checa se todos os valores sao numeros maiores que zero
function isAnyNumbersGreaterThanZero(...counts) {
  return counts.some((counts) => counts > 0);
}
