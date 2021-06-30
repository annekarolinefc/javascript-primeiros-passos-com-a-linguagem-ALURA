const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemCompranda = true;

//  || -> OU
//  && -> E

if(
    idadeComprador >= 18 || estaAcompanhada == true
    ){
    console.log("Comprador maior de idade.")
    console.log("Boa viagem!")
} else{
    console.log("Comprador não é maior de Idade e não esta acompanhado. Não poderá realizar uma compra") 
}

//__________________________________

console.log("EMBARQUE: \n\n")
if(idadeComprador >= 18 && temPassagemCompranda){
    console.log("Pode embarcar.")
}
else{
    console.log("Não pode embarcar")
}