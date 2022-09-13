//VARIAVEIS
const texto = 'ola, mundo'
const numero = 20
const float = 20.3 //não direfere numero e float como python
const lista = ['brasil', 'casa', 123]

//TIPOS
console.log(typeof(texto))
console.log(typeof(numero))
console.log(typeof(lista))
console.log(typeof(float))


//LISTAS
lista[2] = ['123', '456']//Alterando valor de lista, adicionando outra lista criada

//visualizando lista dentro de lista
console.log(lista)

//BOOLEANO
a = true && false
b = false || true
c = 2 != 3
d = 2==4 || 2!=2
console.log(`${a}, ${b}, ${c}, ${d}`)


//OBJETO
const pessoa = {
    nome:'brayan,miguel,joao,patricia', 
    idade: 30,
    hoobs: ['programar', 'tocar violão'],
}

//imprimindo informações do objeto
console.log(pessoa.nome.toLocaleLowerCase())
splitar = pessoa.nome.split(',')
console.log(`variavel splitar: ${splitar}`)
console.log(`O 4 item da variavel: ${splitar[3]}`)//mostrando 2 iten lista criada
console.log(pessoa.hoobs[1].toUpperCase())

//alterar informações do objeto, 2 elementos de hoobs
pessoa.hoobs[1] = 'tocar bateria'
pessoa.hoobs[2] = 'tocar guitarra'
console.log(pessoa.hoobs)