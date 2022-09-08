//https://youtu.be/BVrSRTJffxM
const listadeobjetos = [
    {
        id:1,
        description: 'Estudar programação',
        isCompleted:false,
    },
    {
        id:2,
        description : 'ler mais',
        isCompleted: true,
    },
    {
        id:3,
        description: 'Análise de dados',
        isCompleted:false
    }
    ]
console.log(listadeobjetos[2])
console.log(listadeobjetos[2].description)

//mudar descrição id 3
listadeobjetos[2].description = 'Data Science'
console.log(listadeobjetos[2].description)

//JASON
//lista para JSON
const listaJSON = JSON.stringify(listadeobjetos)
console.log(listaJSON)

//Json para LISTA
const listas = JSON.parse(listaJSON)
console.log(listas)


