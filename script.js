const containerCards = document.getElementById('carrossel-cards');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnTema = document.getElementById('btn-tema');
// O valor em pixels que o carrossel vai andar a cada clique
// 320 é ideal porque é a largura do card (300px) + o gap (20px)
const tamanhoRolagem = 320;
const selectDestino = document.getElementById('destino');
 
btnNext.addEventListener('click', function() {
    // Rola o container para a DIREITA
    containerCards.scrollBy({
        left: tamanhoRolagem,
        behavior: 'smooth'
    });
 });
 
btnPrev.addEventListener('click', function() {
    // Rola o container para a ESQUERDA (por isso o valor é negativo)
    containerCards.scrollBy({
        left: -tamanhoRolagem,
        behavior: 'smooth'
    });
});
 

btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  
    // Salva a escolha no navegador
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("modo", "escuro");
    } else {
      localStorage.setItem("modo", "claro");
    }
  });
  
  // Mantém o tema salvo ao recarregar a página
  if (localStorage.getItem("modo") === "escuro") {
    document.body.classList.add("dark-theme");
  }
 
  const btnCalcular = document.getElementById('btn-calcular');
 
    const inputCheckin = document.getElementById('checkin');
    const inputCheckout = document.getElementById('checkout');
    const spanDiaria = document.getElementById('valor-diaria');
    const spanDias = document.getElementById('qtd-dias');
    const spanTotal = document.getElementById('valor-total');

// Quando o usuário troca o destino, já mostra o valor da diária
selectDestino.addEventListener('change', function() {
const valorDiaria = selectDestino.value;
  if (valorDiaria) {
  spanDiaria.innerText = 'R$ ' + Number(valorDiaria).toFixed(2).replace('.', ',');
  } else {
  spanDiaria.innerText = 'R$ 0,00';
  }
  });
// Quando clica em "Calcular Valor"
btnCalcular.addEventListener('click', function() {
// 2. Converte as strings de data em objetos Date do JavaScript
const dataEntrada = new Date(inputCheckin.value);
const dataSaida = new Date(inputCheckout.value);
// 3. Valida que a data de saída precisa ser DEPOIS da data de entrada
if (dataSaida <= dataEntrada) {
  alert('A data de saída precisa ser depois da data de entrada!');
return;
}
// 4. Calcula a diferença em milissegundos e converte para dias
const diferencaMs = dataSaida - dataEntrada;
const diasTotais = diferencaMs / (1000 * 60 * 60 * 24);
// 5. Pega o valor da diária do destino selecionado
const valorDiaria = Number(selectDestino.value);
// 6. Calcula o valor total (dias x diária)
const valorTotal = diasTotais * valorDiaria;
// 7. Exibe os resultados na tela
spanDias.innerText = diasTotais;
spanTotal.innerText = 'R$ ' + valorTotal.toFixed(2).replace('.', ',');
});