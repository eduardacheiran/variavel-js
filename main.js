
let x = 10;
let y = 20;
 
console.log("Valores iniciais: x =", x, "e y =", y);
 
let temp = x;
x = y;
y = temp;
 
console.log("Novos valores: x =", x, "e y =", y);
 
let numero1 = parseFloat(prompt("Insira o primeiro número:"));
let numero2 = parseFloat(prompt("Insira o segundo número:"));
 
let soma = numero1 + numero2;
let multiplicacao = numero1 * numero2;
 
console.log("A soma dos números é:", soma);
console.log("A multiplicação dos números é:", multiplicacao);

//

let nome, cidade;
 
console.log(typeof nome);
console.log(typeof cidade);
 
nome = prompt("Qual seu nome?");
cidade = prompt("Qual cidade você mora?");
 
console.log(typeof nome);
console.log(typeof cidade);
 
console.log(`Olá, meu nome é ${nome} e moro em ${cidade}.`);
 
//
 
let perguntaUm = prompt('Você gosta de escutar música?')
console.log('Você gosta de escutar música?', perguntaUm)
 
let perguntaDois = prompt('Você gosta de ir a praia?')
console.log('Você gosta de ir a praia?', perguntaDois)
 
let perguntaTres = prompt('Você gosta de séries de suspense?')
console.log('Você gosta de séries de suspense?', perguntaTres)
