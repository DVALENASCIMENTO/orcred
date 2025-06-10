const carrinho = [];

function renderCatalogo() {
  const container = document.getElementById("catalogoServicos");
  servicos.forEach(secao => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${secao.titulo}</h3>`;

    secao.subservicos.forEach(s => {
      const subDiv = document.createElement("div");
      subDiv.style.marginLeft = "20px";

      // Checkbox do subserviço principal
      const id = `${secao.titulo}-${s.titulo}`.replace(/\s+/g, '-');
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = id;
      checkbox.onchange = () => toggleCarrinho(s.titulo, checkbox.checked);

      const label = document.createElement("label");
      label.htmlFor = id;
      label.textContent = s.titulo;
      label.prepend(checkbox);

      subDiv.appendChild(label);

      // Verifica se há subsubserviços (strings)
      if (Array.isArray(s.subservicos)) {
        const lista = document.createElement("ul");
        lista.style.listStyleType = "none";
        lista.style.paddingLeft = "20px";

        s.subservicos.forEach(sub => {
          const subId = `${id}-${sub}`.replace(/\s+/g, '-');
          const li = document.createElement("li");

          const subCheckbox = document.createElement("input");
          subCheckbox.type = "checkbox";
          subCheckbox.id = subId;
          subCheckbox.onchange = () => toggleCarrinho(sub, subCheckbox.checked);

          const subLabel = document.createElement("label");
          subLabel.htmlFor = subId;
          subLabel.textContent = sub;
          subLabel.prepend(subCheckbox);

          li.appendChild(subLabel);
          lista.appendChild(li);
        });

        subDiv.appendChild(lista);
      }

      div.appendChild(subDiv);
    });

    container.appendChild(div);
  });
}

document.getElementById("toggleCatalogo").addEventListener("click", () => {
  const wrapper = document.getElementById("catalogoWrapper");
  const btn = document.getElementById("toggleCatalogo");
  const aberto = wrapper.style.display === "block";
  wrapper.style.display = aberto ? "none" : "block";
  btn.textContent = aberto ? "Mostrar Catálogo" : "Ocultar Catálogo";
});


function toggleCarrinho(titulo, checked) {
  if (checked) {
    carrinho.push(titulo);
  } else {
    const idx = carrinho.indexOf(titulo);
    if (idx > -1) carrinho.splice(idx, 1);
  }
  renderCarrinho();
}

function renderCarrinho() {
  const ul = document.getElementById("carrinho");
  ul.innerHTML = "";
  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

function salvarPDF() {
  const elemento = document.getElementById("orcamento");
  html2pdf().from(elemento).save('orcamento.pdf');
}

function enviarWhatsApp() {
  alert("Salve o PDF e envie manualmente via WhatsApp.");
}

function enviarEmail() {
  const email = prompt("Digite o e-mail de destino:");
  if (email) alert(`Envie manualmente para ${email} com o PDF anexo.`);
}

document.addEventListener("DOMContentLoaded", () => {
  renderCatalogo();
});
