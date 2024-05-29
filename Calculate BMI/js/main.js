import { Modal } from "./modal.js";
import { alertError } from "./alert.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

/* MINIMIZA A MENSAGEM DE ALERTA DE ERRO AO INICIAR A DIGITAÇÃO*/
inputWeight.oninput = () => alertError.close();
inputHeight.oninput = () => alertError.close();

form.onsubmit = (event) => {
  event.preventDefault();

  const weigth = inputWeight.value;
  const heigth = inputHeight.value;

  const checkValueIsNumber = isNotANumber(weigth) || isNotANumber(heigth);

  if (checkValueIsNumber) {
    alertError.open();
    inputWeight.value = "";
    inputHeight.value = "";
    return;
  }
  const result = calculateBMI(weigth, heigth);
  Modal.message.innerHTML = `Your BMI is ${result}`;
  Modal.open();
  alertError.close();

  inputWeight.value = "";
  inputHeight.value = "";
};

function isNotANumber(value) {
  return isNaN(value) || value == "";
}

function calculateBMI(w, h) {
  return (w / (h / 100) ** 2).toFixed(2);
}
