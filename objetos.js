const person ={
    firstname: 'brayan',
    lastname: 'mesquita',
    age: '20',
    hoobies: ['tocar violão', 'programação', 'assistir filmes'],
    dog:{
        name:'sky',
        age:1
    }
}

//PRIMEIRA FORMA DE ATRIBUIR VALORES
// const firstname = person.firstname
// const lastname = person.lastname
// const age = person.age
// const hoobies = person.hoobies

//SEGUNDA FORMA COM DES**** 
//acessar propriedades do objeto e atribuir mesma classes
const {firstname:primeironome,
     lastname,
      age,
       hoobies,
        dog:{name:dogname}
    } = person
//firtname foi mudado para primeironome
//no dog retornou apenas o nome como sky

console.log(primeironome.toLocaleUpperCase())
console.log(hoobies)

//acessar ultimo hoobies e salvar
terceirobbies = hoobies[2]
console.log(terceirobbies)


//CRIAR NOVAS PROPRIEDADES para o objeto
//person.pet = 'cachorro'
person.job = 'Policial civil'
//console.log(`${person.job}`)
//novo objetos cursos para person
person.cursos = {
    1:'ciências contáveis',
    2:'ciências de dados'}

//IMPRIMIR VALORES
//console.log(person)
//console.log(person.dog.name)//sky
//console.log(person.cursos)//retorna lista
console.log(dogname.toUpperCase())//sky
