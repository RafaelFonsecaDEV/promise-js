 class MinhaClasse{
    constructor(valor){
        this.valor = valor;
    
    }
    operacaoAssincrona(){
      return new Promise((resolve,reject) =>{

        const resultado = this.valor * 2;

        if(resultado >=10){
             resolve(resultado)
        }else{
            reject("o resultado e negativo")
        }
      })

    }

}

const minhaClasse = new MinhaClasse(2);

minhaClasse.operacaoAssincrona()
.then((resultado)=>{
    console.log("o resultado da operacao e:" ,resultado)
})
.catch((erro)=>{
    console.log("ocorreu um problema:", erro)
})