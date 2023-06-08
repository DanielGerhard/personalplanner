import * as elements from "./elements.js";
import * as eventHandler from "./event-handler.js";
import * as utils from "./utils.js";
let csrfToken;

export function get_item() {
  const dataHoraAtual = new Date().toISOString().slice(0, 23).padEnd(26, "0");
  const itemNovo = {
    descricao: " ",
    comprado: false,
    valor: "0",
    criacao: dataHoraAtual,
  };
}

export function deleteItem(itemId) {
  var itemData = {
    id: itemId,
  };

  fetch("/api/lista-de-compras/ListaDeCompras/" + itemId + "/", {
    method: "DELETE",
    headers: {
      "X-CSRFToken": csrfToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemData),
  })
    .then(function (response) {
      if (response.ok) {
      } else {
        throw new Error("Erro ao Deletar o item.");
      }
    })
    .then(function (data) {
      updateTabela();
    })
    .catch(function (error) {
      console.error("Erro:", error);
    });
}

// Função para atualizar um item
export function updateItem({
  itemId = null,
  valorItem = null,
  campoItem = null,
}) {
  var itemData = {
    id: itemId,
    [campoItem]: valorItem,
  };
  console.log(itemData);

  fetch("/api/lista-de-compras/ListaDeCompras/" + itemId + "/", {
    method: "PATCH",
    headers: {
      "X-CSRFToken": csrfToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemData),
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Erro ao atualizar o item.");
      }
    })
    .then(function (data) {
      utils.debounceFunction(updateTabela(), 2000);

    })
    .catch(function (error) {
      console.error("Erro:", error);
    });
}

export function criar_item() {
  fetch("/api/lista-de-compras/ListaDeCompras/", {
    method: "POST",
    headers: {
      "X-CSRFToken": csrfToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(get_item()),
  })
    .then((response) => {
      if (response.status === 201) {
        console.log("Item criado com sucesso!");
        updateTabela();
      } else {
        console.error("Erro ao criar o item:", response.status);
      }
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
    });
}

export function updateTabela() {
  fetch("/api/lista-de-compras/ListaDeCompras/?format=json")
    .then((response) => response.json())
    .then((data) => {
      // Manipule os dados recebidos da API aqui
      elements.criarTabela("[js-tabela]", data);
    })
    .catch((error) => {
      // Trate erros de requisição aqui
      console.error(error);
    });
}

export function init() {
  csrfToken = document.querySelector("[name=csrfmiddlewaretoken]").value;
  updateTabela();
}
