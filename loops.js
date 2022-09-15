console.log('incrementando')
for (let i=0; i < 10; i +=2){
    console.log(i)
}
console.log('decrementando')
for (let i=500; i > 100; i -=100){
    console.log(i)
}
console.log('percorrendo lista')
let lista = ['fusca', 'kombi', 'celta']
for (let i= 0; i < lista.length; i+=1){
    console.log(lista[i].toLocaleLowerCase(), 'valor do i é: ' + i)
}

console.log('percorrendo lista, 2 forma')
const cores = ['azul', 'marrom', 'blue']

for(let cor of cores){
    console.log(cor)
}

console.log('percorrendo lista com for each')
cores.forEach(function(cor, index){
    console.log(cor + ' ' + index);
});

// comando while

let contador = 0
while(contador <= 10){
    console.log(`${contador} é menor ou igual a 10`);
    //contador += 1;
    contador ++
}

// for in
const person = {
    name: 'brayan',
    idade: 30,
    hobs: ['programcao', 'tocar violao']
}
//percorrendo as propriedades
for (prop in person){
    console.log(person[prop])
}