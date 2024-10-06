function obterValor(valor){
    return new Promise((resolve, reject)=>{
        if(valor > 10){
            valor += 1;
            resolve(valor)
        }else{
            reject("Nao foi possivel obter o valor")
        }
    })
}

function dobrarValor(valor){
    return valor * 2
}

function adicionar10(valor){
    return valor + 10
}

obterValor(28)
.then((valor) =>{
console.log(" valor obtido")
return dobrarValor(valor);

})

.then((novoValor)=>{
    console.log("fazendo o segundo tratamento")
    return adicionar10(novoValor)
})

.then((resultado)=> {
    total = resultado + 5
    console.log("o resultado final e ,", total)
})
.catch((erro)=>{
    console.log("ocorreu um erro :" , erro)
})