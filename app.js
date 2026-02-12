let carrinho = [];
let total = 0;
let produtosGlobais = [];

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  total += preco;
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById("carrinho");
  const totalElemento = document.getElementById("total");

  lista.innerHTML = "";

  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco}`;
    lista.appendChild(li);
  });

  totalElemento.textContent = total;
}

function esvaziarCarrinho() {
  carrinho = [];
  total = 0;
  atualizarCarrinho();
}

function finalizarPedido() {
  if (carrinho.length === 0) {
    alert("Carrinho vazio!");
    return;
  }

  let mensagem = "Olá! Gostaria de fazer um pedido:%0A";

  carrinho.forEach(item => {
    mensagem += `- ${item.nome} R$${item.preco}%0A`;
  });

  mensagem += `%0ATotal: R$${total}`;

  window.open(`https://wa.me/5599999999999?text=${mensagem}`);
}

function filtrarProdutos() {
  const termo = document.getElementById("pesquisa").value.toLowerCase();
  const container = document.getElementById("lista-produtos");
  container.innerHTML = "";

  produtosGlobais
    .filter(prod => prod.nome.toLowerCase().includes(termo))
    .forEach(prod => criarProduto(prod));
}

function criarProduto(prod) {
  const container = document.getElementById("lista-produtos");

  const div = document.createElement("div");
  div.classList.add("produto");

  div.innerHTML = `
    <img src="${prod.imagem}">
    <p>${prod.nome}</p>
    <strong>R$ ${prod.preco}</strong>
    <button onclick="adicionarAoCarrinho('${prod.nome}', ${prod.preco})">+</button>
  `;

  container.appendChild(div);
}

fetch("produtos.json")
  .then(res => res.json())
  .then(produtos => {
    produtosGlobais = produtos;
    produtos.forEach(prod => criarProduto(prod));
  });
