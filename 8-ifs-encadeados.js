const idadeComprador = 15;
const estaAcompanhada = true;

if(idade > 18){
    //executar compra
    console.log("Comprador maior de idade.")
} else{
    //a pessoa é menor de idade
    if(estaAcompanhada == true){
        console.log("Comprador está acompanhado. Poderá realizar a compra.")
    }else{
    console.log("Comprador não é maior de Idade e não esta acompanhado. Não poderá realizar uma compra")
    } 
}