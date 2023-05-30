function criarTabela(seletorTabela, dados) {
  let tabela = document.querySelector(seletorTabela);
  let tBody = tabela.querySelector("tbody");
  tBody.innerHTML = "";
  dados.forEach((item) => {
    const novaLinha = document.createElement("tr");
    const descricaoCelula = document.createElement("td");
    descricaoCelula.textContent = item.descricao;
    novaLinha.appendChild(descricaoCelula);

    const valorCelula = document.createElement("td");
    if (item.valor == null) {
      valorCelula.textContent = ` `;
    } else {
      valorCelula.textContent = `R$ ${item.valor}`;
    }
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
