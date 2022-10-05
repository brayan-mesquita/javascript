
const a = 1 + 1;//2
const b = 2 + 2;//4

if(a != 1+2){
    console.log("A difere de 1 + 2")
}
if (a == 1 || b != a) {
    console.log("Segunda condição atendida")
}
if (a == 1+1 && b != a) {
    console.log("Terceira condição atendida")
}
// atribuindo valor a variavel a partir de condicao
let number;
function numero(){
    if(a != 2){
        number = 2
    }else{
        number = 10}
    console.log(number)}
numero()

// exemplo case em carros
const car = ["fusca", "kombi", "onix"]
switch(car[1]){
    case "fusca":
        console.log("o carro é fusca")
        break
    case "kombi":
        console.log("o carro é kombi")
        break
}
