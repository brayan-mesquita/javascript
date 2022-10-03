class Person{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    nome_Idade(){
        console.log(`Seu nome: ${this.nome}, sua idade: ${this.idade}.`);
    }
    //pode ser statico, nao puxa nada da classe
    static hello(){
        console.log('Hello, word!')
    }
}

const person = new Person('brayan', 30);//Instanciar classe
console.log(person)
person.nome_Idade()

//CHAMAR METODO STATICO
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
            console.log(i)
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
animal.nome_do_animal()
dog.nome_do_animal()
dog.fornumber()//funcao da classe maior