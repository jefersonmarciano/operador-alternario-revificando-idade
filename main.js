let checkButton = document.getElementById('check-button')
// criei uma variavel chamada checkButton que esta escutando o check-button no html
let ageInput = document.getElementById('age-input')

checkButton.addEventListener('click', function() {
    // adicionei um metodo a essa variavel chamada checkButton que vai escutar por um click e rodar a função a baixo
    let age = ageInput.value // nessa linha estou pegando no que foi declarado na linha 2
    let message = (age >= 18) ? 'Você é um adulto' : 'Você não é um adulto'
    alert(message)
    // abaixo estou limpando o campo digitado
    ageInput.value = ''
})