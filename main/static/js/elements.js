import * as eventHandler from "./event-handler.js";

export function getInput({
  // Parametros
  type = "text",
  value = null,
  name = null,
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
  if (placeholder) input.placeholder = placeholder;
  if (onChange) input.setAttribute("onchange", onChange);
  if (elementClass) input.classList.add(elementClass);
  return input;
}

export function criarTabela(seletorTabela, dados) {
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
      elementClass: "input-editavel",
    });
    descricaoCelula.appendChild(descricaoCelulaInput);
    novaLinha.appendChild(descricaoCelula);

    // Valor Célula
    const valorCelula = document.createElement("td");
    const valorCelulaInput = getInput({
      type: "number",
      value: item.valor,
      elementClass: "input-editavel",
    });
    valorCelula.appendChild(valorCelulaInput);
    novaLinha.appendChild(valorCelula);

    // Delete Button
    const deletButton = document.createElement("td");
    deletButton.appendChild(getDefaultDeleteButton(item.id));
    novaLinha.appendChild(deletButton);

    // Adiciona a nova linha à tabela
    tBody.appendChild(novaLinha);
  });
  eventHandler.updateEvents()
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
