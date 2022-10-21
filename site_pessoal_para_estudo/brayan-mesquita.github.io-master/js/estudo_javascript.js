//SECAO EDUCACAO
const educacao = document.querySelector('#education')
educacao.innerText = 'Teste'
educacao.style.background = 'black'
educacao.style.color = 'red'

//SOBRENOME
const sobre_nome = document.querySelector('.mb-0 .text-primary')
//sobre_nome.remove()
sobre_nome.textContent = 'Miguel Soares Nogueira'
sobre_nome.style.background = 'orange'


//VARIOS ITENS
all_section = document.querySelectorAll('.resume-section .lead')//retornar node list
//console.log(all_section)//node list

//PEGANDO PRIMEIRO ITEM DA LISTA
description_pessoa = all_section[0]
description_pessoa.textContent = 'cientista de dados, e analista'
description_pessoa.style.background = 'purple'


//BUSCANDO LI WORK FLOW
li_workflow = document.querySelector('#work_flow')
li_workflow.style.background = 'orange'
//li_workflow.remove()
//console.log(li_workflow)

//MUDAR COR EXPERIENCIA
experiencia = document.querySelector('#experience .mb-5')
experiencia.innerHTML = '<h1>Experiencias anteriores e atuais</h1>'
experiencia.style.background = 'pink'

//NAVBAR
navbar = document.querySelector('#sideNav .d-lg-none')
navbar.style.color = 'red'
console.log(navbar)