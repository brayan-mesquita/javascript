//testando valores logicos de variáveis
function teste(variavel){
    if(variavel){
        console.log('passou')
    }
    else{
        console.log('não passou')
    }
}
//teste(!null)
//teste(3)
//teste(!3)//exclação invert sinal
//teste([])//lista vazia tem valor true



//testar lista vazia
let carros = ['onix', 'fusca']
let motos = []

function listaocupada(x){
    if (x.length > 0){
        console.log(`${x} tem valor`)
    }
    else{
        console.log(`${x.name} não tem valor`)
    }
}
//listaocupada(carros)
//listaocupada(motos)

//funcao soma
function somar(a, b){
    console.log(a+b)
}
//somar(2, 3)



//arrow functions 1 - funcao atribuita a uma variavel const.
const soma_de_numeros = (c, d) =>{
    //console.log(c+d);
    return c + d;//apenas retonar valor não imprimi senão houve console.log ou outra impressão
};
//console.log(soma_de_numeros(2, 2))//4



//arrow function 2, apenas retorno
const soma_de_numeros2 = (e, f=0) => e + f + (e*f);//deu 15, valor padrao 0, se não for passado outro parametro
console.log(soma_de_numeros2(3))//3
result2 = soma_de_numeros(4, 4)//guardar valor em outra variavel
console.log(result2)//imprir variavel de retorno