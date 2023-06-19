let csrfToken = document.querySelector("[name=csrfmiddlewaretoken]").value;
$(document).ready(function () {
  $("#myTable").DataTable({
    dom: "Bfrtip",
    buttons: [
      "copy",
      "csv",
      "excel",
      "pdf",
      {
        text: "Imprimir",
        className: "btn-print",
        action: function () {
          window.print();
        },
      },
    ],
    autoFill: true,
    language: {
      url: "//cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json",
    },
    ajax: {
      url: "api/movimentacoes/receitas/?format=json",
      dataSrc: "",
      method: "GET",
      headers: {
        "X-CSRFToken": csrfToken,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
    columns: [
      { data: "id" },
      {
        data: "descricao",
        render: function (data, type, row, meta) {
          var link =
            '<a href="api/movimentacoes/receitas/' +
            row.id +
            '">' +
            data +
            "</a>";
          return link;
        },
      },
      {
        data: "valor",
        render: function (data, type, row, meta) {
          var formattedValue = parseFloat(data).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          });
          return formattedValue;
        },
      },
      {
        data: "data",
        render: function (data, type, row, meta) {
          var date = new Date(data);
          var formattedDate =
            ("0" + date.getDate()).slice(-2) +
            "/" +
            ("0" + (date.getMonth() + 1)).slice(-2) +
            "/" +
            date.getFullYear();
          return formattedDate;
        },
      },
      {
        data: null,
        className: "dt-center editor-edit",
        defaultContent: '<i class="fa fa-pencil"/>',
        orderable: false,
      },
      {
        data: null,
        className: "dt-center editor-delete",
        defaultContent: '<i class="fa fa-trash"/>',
        orderable: false,
      },
    ],
  });
});

// let btnMais = document.querySelector("[btn-create]");
// console.log(btnMais);
// if (btnMais) {
//   btnMais.addEventListener("click", function () {
//     fetch("/api/movimentacoes/receitas/", {
//       method: "POST",
//       headers: {
//         "X-CSRFToken": csrfToken,
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         descricao: "  ",
//         valor: "0",
//       }),
//     })
//       .then((response) => {
//         if (response.status === 201) {
//         } else {
//           console.error("Erro ao criar o item:", response.status);
//         }
//       })
//       .catch((error) => {
//         console.error("Erro na requisição:", error);
//       });
//   });
// }
