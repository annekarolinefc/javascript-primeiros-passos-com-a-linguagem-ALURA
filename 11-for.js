const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
)
console.log(listaDeDestinos);

const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemCompranda = true;
const destino = "Rio de Janeiro"

//  || -> OU
//  && -> E

if(
    idadeComprador >= 18 || estaAcompanhada == true
    ){
    console.log("Comprador maior de idade.")
    console.log("Boa viagem!")
    temPassagemCompranda = true;
} else{
    console.log("Comprador não é maior de Idade e não esta acompanhado. Não poderá realizar uma compra") 
    temPassagemCompranda = false;
}

//__________________________________

console.log("EMBARQUE: \n\n")
if(idadeComprador >= 18 && temPassagemCompranda){
    console.log("Pode embarcar.")
}
else{
    console.log("Não pode embarcar")
}

//___________________________
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

if(podeComprar && destinoExiste){
    console.log("Boa viagem!")
} else{
    console.log("Desculpe, tivemos um erro.")
}

for(let cont=0; cont <3 ; cont++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
}