texto = document.querySelector('h1')
texto.style.color = 'blue'

botao = document.querySelector('.btn')
botao.style.background = 'red'
botao.style.color = 'blue'
botao.title = 'blue'
//console.log(botao)


for (pro in texto){
    console.log(pro)
}