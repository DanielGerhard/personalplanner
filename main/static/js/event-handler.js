import * as api from "./api-handler.js";
import * as utils from "./utils.js";



function formatCurrency(event) {
  const input = event.target;
  let value = input.value;
  if (value.length > 8) {
    value = value.slice(0, - 1);
    input.value = value;
    return;
  }
  let strValue = String(value);
  let splitedValue = strValue.split(".");
  let decimals = splitedValue[1];
  if (!strValue.includes(".")) {
    value = (value / 100).toFixed(2);
  } else if (decimals.length > 2) {
    value = (value * 10).toFixed(2);
  }
  input.value = value;
}

export function updateEvents() {
  
  const moneyInputs = document.querySelectorAll(".money");

  // Itera sobre cada elemento e adiciona o ouvinte de evento 'input'
  moneyInputs.forEach((input) => {
    input.addEventListener("input", formatCurrency);
  });

  // Default Delete Button
  let defaultDeleteButtons = document.querySelectorAll(
    "[default-delete-button-ce]"
  );
  if (defaultDeleteButtons.length > 0) {
    defaultDeleteButtons.forEach(function (defaultButton) {
      defaultButton.addEventListener("click", function (event) {
        event.preventDefault();
        let itemId = defaultButton.value;
        api.deleteItem(itemId);
      });
    });
  }

  // Default Input Editavel
  const inputEditaveis = document.querySelectorAll("[input-editavel]");
  inputEditaveis.forEach(function (inputEditavel) {
    inputEditavel.addEventListener(
      "input",
      utils.debounce(function (event) {
        api.updateItem({
          itemId: inputEditavel.getAttribute("key"),
          valorItem: inputEditavel.value,
          campoItem: inputEditavel.getAttribute("field"),
        });
      }, 800)
    );
  });
}

export function init() {
  // Default button Mais
  const buttonMais = document.querySelector("[button-mais]");
  if (buttonMais) {
    buttonMais.addEventListener("click", function (event) {
      event.preventDefault();
      api.criar_item();
    });
  }

  utils.debounce(function () {
    console.log("1");
    console.log("2");
  }, 1000);
}
