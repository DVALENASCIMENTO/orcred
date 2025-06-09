const carrinho = [];

function renderCatalogo() {
  const container = document.getElementById("catalogoServicos");
  servicos.forEach(secao => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${secao.titulo}</h3>`;
    secao.subservicos.forEach(s => {
      const id = `${secao.titulo}-${s.titulo}`.replace(/\s+/g, '-');
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = id;
      checkbox.onchange = () => toggleCarrinho(s.titulo, checkbox.checked);
      const label = document.createElement("label");
      label.htmlFor = id;
      label.textContent = s.titulo;
      label.prepend(checkbox);
      div.appendChild(label);
    });
    container.appendChild(div);
  });
}

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
