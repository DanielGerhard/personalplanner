var timeout;
function onChangeHandler(element) {
  // Cancela o timeout anterior, se houver um
  if (timeout) {
    clearTimeout(timeout);
  }

  // Define um novo timeout de 500 milissegundos
  timeout = setTimeout(function () {
    console.log(elemento);
  }, 400);
}

function criarTabela(seletorTabela, dados) {
  let tabela = document.querySelector(seletorTabela);
  let tBody = tabela.querySelector("tbody");
  tBody.innerHTML = "";
  dados.forEach((item) => {
    const novaLinha = document.createElement("tr");
    const descricaoCelula = document.createElement("td");
    const descricaoCelulaInput = document.createElement("input");
    descricaoCelulaInput.type = "text";
    descricaoCelulaInput.value = item.descricao;
    descricaoCelula.appendChild(descricaoCelulaInput);
    novaLinha.appendChild(descricaoCelula);

    const valorCelula = document.createElement("td");
    const valorCelulaInput = document.createElement("input");
    valorCelulaInput.type = "number";

    valorCelulaInput.value = item.valor;

    valorCelula.appendChild(valorCelulaInput);
    novaLinha.appendChild(valorCelula);

    // Adiciona a nova linha à tabela
    tBody.appendChild(novaLinha);
  });
}

function get_item() {
  const dataHoraAtual = new Date().toISOString().slice(0, 23).padEnd(26, "0");
  const itemNovo = {
    descricao: " ",
    comprado: false,
    valor: "0",
    criacao: dataHoraAtual,
  };
}

const csrfToken = document.querySelector("[name=csrfmiddlewaretoken]").value;
console.log(csrfToken);

// Função para atualizar um item
function updateItem(itemId, valorItem, campoItem) {
  var itemData = {
    id: itemId, // ID do item a ser atualizado
    // Preencha aqui os campos que deseja atualizar
    valor: valorItem,
    campo: campoItem,
  };

  fetch("/api/lista-de-compras/ListaDeCompras/", {
    method: "POST",
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
      updateTabela()
      // Faça algo com os dados do item atualizado
    })
    .catch(function (error) {
      console.error("Erro:", error);
    });
}

function criar_item() {
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

function updateTabela() {
  fetch("/api/lista-de-compras/ListaDeCompras/?format=json")
    .then((response) => response.json())
    .then((data) => {
      // Manipule os dados recebidos da API aqui
      criarTabela("[js-tabela]", data);
    })
    .catch((error) => {
      // Trate erros de requisição aqui
      console.error(error);
    });
}

updateTabela();

updateItem(22, 2, "valor");
