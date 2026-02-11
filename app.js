let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  total += preco;
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById("carrinho");
  const totalElemento = document.getElementById("total");

  if (!lista) return;

  lista.innerHTML = "";

  carrinho.forEach(produto => {
    const li = document.createElement("li");
    li.textContent = `${produto.nome} - R$ ${produto.preco}`;
    lista.appendChild(li);
  });

  totalElemento.textContent = total;
}

function esvaziarCarrinho() {
  carrinho = [];
  total = 0;
  atualizarCarrinho();
}

if (document.getElementById("lista-produtos")) {
  fetch("produtos.json")
    .then(res => res.json())
    .then(produtos => {
      const container = document.getElementById("lista-produtos");
      produtos.forEach(prod => {
        const div = document.createElement("div");
        div.classList.add("produto");
        div.innerHTML = `
          <span>${prod.nome} - R$ ${prod.preco}</span>
          <button onclick="adicionarAoCarrinho('${prod.nome}', ${prod.preco})">+</button>
        `;
        container.appendChild(div);
      });
    });
}