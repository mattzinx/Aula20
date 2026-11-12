// 1
const idadeUsuario = +prompt('Qual é sua idade?');

if (idadeUsuario >= 18) {
  console.log('Acesso liberado! Divirta-se.')
};
if (idadeUsuario < 18) {
  console.log('Acesso negado. Você é menor de idade.')
};


// 2 
const senhaCorreta = 'front123';
const senhaDigitada = prompt('Digite a senha de acesso.');

if (senhaDigitada === senhaCorreta) {
  console.log('Login efetuado com sucesso!')
};

if (senhaDigitada !== senhaCorreta) {
  console.log('Senha incorreta. Tente novamente')
};


// 3
let valorDeCompra = +prompt('Digite o valor da compra');

if (valorDeCompra > 100) {
  valorDeCompra = valorDeCompra - 10
};

console.log('O valor total é de:' + ' ' + valorDeCompra);


// 4
const quantidade = +prompt('Quantos produtos você vai comprar?');
const valorGasto = + prompt('Digite o valor de compra!');

let pontuacao = 0;

if (quantidade >= 5) {
  pontuacao = pontuacao + 50
};

if (valorGasto >= 200) {
pontuacao = pontuacao + 200
};

console.log ( 'Você tem:' + ' ' + pontuacao + ' ' +  ' pontos extras!');

// 5
const salarioBase = +prompt(' Digite seu Salario!');
const totalVendas = +prompt( " Digite o total de vendas!");
const notaAvaliacao = 10;

const bonus = 0.15;
let salarioBonus = 0;

if ( totalVendas > 5000 && notaAvaliacao >= 8) {
 salarioBonus = salarioBase * bonus
};

let salarioFinal = salarioBase + salarioBonus;

console.log ('Seu salario final é:' + ' ' + salarioFinal );


// 6
const valorPedido = +prompt ('Digite o valor do pedido!');
const distanciaKm = +prompt (' Digite a distancia!');
const taxaDeEntrega = 10;
let taxaPorKm = 0;
if (valorPedido < 30 || distanciaKm > 10) {
taxaPorKm = 5;
}

let valorTotal = valorPedido + taxaDeEntrega + taxaPorKm;

console.log('O valor total gasto é:' + ' ' + valorTotal);






