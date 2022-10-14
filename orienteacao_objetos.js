class Person{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    nome_idade(){
        console.log(`Seu nome: ${this.nome}, sua idade: ${this.idade}.`);
    }
    //pode ser statico, nao puxa nada da classe
    static hello(){
        console.log('Hello, word!')
    }
}

const person = new Person('brayan', 30);//Instanciar classe
nome = person.nome
idade = person.idade
console.log(nome+' tem '+idade)//brayan tem 30


//CHAMAR NOME IDADE
person.nome_idade()//seu nome é brayan sua idade e 30

//CHAMAR METODO STATICO - SO ACENSSA PELA CLASSE
Person.hello()


//HERANCA
class Animal{
    constructor(nome){
        this.nome = nome;
    }
    nome_do_animal(){
        console.log(`${this.nome}, é seu nome de animal.`);
    }
    fornumber(){
        for(let i=0;i < 5;i++){
            console.log(i+' '+this.nome)
        }
    }
}

class Dog extends Animal{
    constructor(nome){
        super(nome);
    }
    nome_do_animal(){
        console.log(`${this.nome}, é seu nome de chachorro.`);//subscrevendo funcao
    }

}
const animal = new Animal('Baleia');//classe maior
const dog = new Dog('Sky')//classe menor
animal.nome_do_animal()//baleia é seu nome
dog.nome_do_animal()//sky é seu nome de, o metodo sobscreveu a classe principal
dog.fornumber()//funcao da classe maior com nome da herdeira
animal.fornumber()//funcao da classe maior com nome da maior