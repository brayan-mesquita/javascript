// //VARIAVEIS
const texto = 'ola, mundo'
const numero = 20
const float = 20.3 //não direfere numero e float como python
const lista = ['brasil', 'casa', 123, [1, 3, 4]]

// //TIPOS
console.log(typeof(texto))
console.log(typeof(numero))
console.log(typeof(float))
console.log(typeof(lista))


// //LISTAS
lista[3] = ['123', '456']//Alterando valor de lista, adicionando outra lista criada

// //visualizando lista dentro de lista
console.log(lista[3])

// //BOOLEANO
a = true && false
b = false || true
c = 2 != 3
d = 2==4 || 2!=2
console.log(`${a}, ${b}, ${c}, ${d}`)


// //OBJETO

const veiculos = {
    nome: ['fusca', 'onix', 'kombi'],
    km : [233, 345, 123]
}
console.log(veiculos.nome[1].toUpperCase())//onix

const pessoa = {
    nome:'brayan,miguel,joao,patricia', 
    idade: 30,
    hoobs: ['programar', 'tocar violão'],
}

//imprimindo informações do objeto
pessoa.nome = pessoa.nome.toUpperCase()
console.log(pessoa.nome)
splitar = pessoa.nome.split(',')
console.log(splitar)//listar dos valores separados por virgula
console.log(`variavel splitar: ${splitar}`)
console.log(`O 4 item da variavel: ${splitar[3]}`)//mostrando 2 iten lista criada
console.log(pessoa.hoobs[1].toUpperCase())

//alterar informações do objeto, 2 elementos de hoobs
pessoa.hoobs[1] = 'tocar bateria'
pessoa.hoobs[2] = 'tocar guitarra'
console.log(pessoa.hoobs)
console.log('igual')