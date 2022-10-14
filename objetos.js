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
       hoobies:lazer,
        dog:{name:dogname}
    } = person
//firtname foi mudado para primeironome
//no dog retornou apenas o nome como sky

//console.log(primeironome.toLocaleUpperCase())//BRAYAN
console.log(lazer)//imprimiu valor de hoobs como lazer

//colcando mais um item lista de hobss
lazer[3] = 'linux'
//console.log(terceirobbies)
console.log(lazer)//imprimiu valor de hoobs como lazer


//CRIAR NOVAS PROPRIEDADES para o objeto
//person.pet = 'cachorro'
person.job = 'Policial civil'
//console.log(`${person.job}`)
//novo objetos cursos para person
person.cursos = {
    1:'ciências contáveis',
    2:'ciências de dados',
    'programacao':'programacao',
}

//IMPRIMIR VALORES
//console.log(person)
//console.log(person.dog.name)//sky
console.log(person.cursos['programacao'].toUpperCase())//retorna lista
//console.log(dogname.toUpperCase())//sky
