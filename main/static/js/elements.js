import * as eventHandler from "./event-handler.js";

export function getInput({
  // Parametros
  type = "text",
  value = null,
  name = null,
  key = null,
  field = null,
  placeholder = null,
  elementClass = null,
  onChange = null,
}) {
  //Funções
  let input = document.createElement("input");
  input.setAttribute("input-editavel", "");
  if (type) input.type = type;
  if (name) input.name = name;
  if (value) input.value = value;
  if (key) input.setAttribute("key", key);
  if (field) input.setAttribute("field", field);
  if (placeholder) input.placeholder = placeholder;
  if (onChange) input.setAttribute("onchange", onChange);
  if (elementClass) {
    let classes = elementClass.split(" ");
    classes.forEach(function (classe) {
      input.classList.add(classe);
    });
  }
  return input;
}

export function criarTabela(seletorTabela, dados) {
  let currentFocus = document.activeElement;

  let tabela = document.querySelector(seletorTabela);
  let tBody = tabela.querySelector("tbody");
  tBody.innerHTML = "";

  dados.forEach((item) => {
    const novaLinha = document.createElement("tr");

    // Descrição Célula
    const descricaoCelula = document.createElement("td");
    const descricaoCelulaInput = getInput({
      type: "text",
      value: item.descricao,
      field: "descricao",
      key: item.id,
      elementClass: "input-editavel",
    });
    descricaoCelula.appendChild(descricaoCelulaInput);
    novaLinha.appendChild(descricaoCelula);

    // Valor Célula
    const valorCelula = document.createElement("td");
    valorCelula.classList.add("valor-celula");
    const labelValor = document.createElement("label");
    labelValor.textContent = "R$";
    labelValor.classList.add("label-input-editavel");
    const valorCelulaInput = getInput({
      type: "number",
      value: item.valor,
      field: "valor",
      key: item.id,
      elementClass: "input-editavel money",
    });
    valorCelula.appendChild(labelValor);
    valorCelula.appendChild(valorCelulaInput);
    novaLinha.appendChild(valorCelula);

    // Delete Button
    const deletButton = document.createElement("td");
    deletButton.classList.add("delete-button");
    deletButton.appendChild(getDefaultDeleteButton(item.id));
    novaLinha.appendChild(deletButton);

    // Adiciona a nova linha à tabela
    tBody.appendChild(novaLinha);
  });
  console.log(currentFocus);
  currentFocus.focus({ focusVisible: true });

  eventHandler.updateEvents();
}

export function getDefaultDeleteButton(itemId) {
  let deleteButton = document
    .querySelector("[default-delete-button]")
    .content.cloneNode(true);
  if (deleteButton) {
    deleteButton.querySelector("button").value = itemId;
    return deleteButton;
  }
}
