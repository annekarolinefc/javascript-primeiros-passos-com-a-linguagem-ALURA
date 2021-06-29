console.log("Atribuição de variáveis");
const idade = 31;
const nome = "Ricardo"
const sobrenome = "Carmo"

console.log(nome, sobrenome);
console.log(nome + " " + sobrenome);

console.log(`Meu nome é ${nome} ${sobrenome}`)

//ERRO -> nome = nome + sobrenome //sobrescrevendo a variavel
//console.log(nome); - NÃO É POSSIVEL ATRIBUIR PARA CONST

let nomeNovo = "Ricardo";
nomeNovo = nomeNovo + " " + sobrenome;
console.log(nomeNovo);