import * as api from "./api-handler.js";

export function debounce(func, delay) {
  let timerId;

  return function (event) {
    clearTimeout(timerId);

    timerId = setTimeout(function () {
      func(event);
    }, delay);
  };
}

export function updateEvents() {
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

  const inputEditaveis = document.querySelectorAll("[input-editavel]");
  inputEditaveis.forEach(function (inputEditavel) {
    inputEditavel.addEventListener(
      "input",
      debounce(function (event) {
        api.updateItem()
      }, 800)
    );
  });
}

export function init() {
  const buttonMais = document.querySelector("[button-mais]");
  if (buttonMais) {
    buttonMais.addEventListener("click", function (event) {
      event.preventDefault();
      api.criar_item();
    });
  }
}
