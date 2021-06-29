console.log("Criando Listas")

const salvador = "Salvador"
const saoPaulo = "São Paulo"
const rioDeJaneiro = "Rio de Janeiro"

console.log("Destinos possíveis: ")
console.log(salvador, saoPaulo, rioDeJaneiro)
//muito trabalhoso de se trabalhar desta forma


//IDEAL TRABALHAR COM ARRAY
const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
)
console.log(listaDeDestinos);

//INSERIR ITEM NA LISTA
listaDeDestinos.push("Belo Horizonte")
console.log(listaDeDestinos);


//REMOVENDO ITEM NA LISTA
listaDeDestinos.splice(1,1);
console.log(listaDeDestinos)//removendo sao paulo

//EXIBIR ELEMENTO CONFORME POSIÇÃO
console.log(listaDeDestinos[1], listaDeDestinos[0])