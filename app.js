let carrinho = [];

function adicionarProduto(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById("listaCarrinho");
  const totalSpan = document.getElementById("total");

  lista.innerHTML = "";

  let total = 0;

  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco}`;
    lista.appendChild(li);
    total += item.preco;
  });

  totalSpan.textContent = total.toFixed(2);
}

function finalizarPedido() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio 😅");
    return;
  }

  let mensagem = "🛒 *Novo Pedido*\n\n";

  carrinho.forEach(item => {
    mensagem += `• ${item.nome} - R$ ${item.preco}\n`;
  });

  const total = carrinho.reduce((s, i) => s + i.preco, 0);
  mensagem += `\n💰 Total: R$ ${total}`;

  const telefone = "5511932874198"; // TROCA PELO SEU
  const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}