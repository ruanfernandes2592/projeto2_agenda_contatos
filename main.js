const form = document.querySelector('form#form-lista');
const numero = []

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha() {
    const inputNome = document.querySelector('input#nome-contato')
    const inputNumero = document.querySelector('input#numero-contato')

    if (numero.includes(inputNumero.value)) {
        alert('Este número de contato já existe em sua agenda')
    } else {

    let linha = '<tr>'
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputNumero.value}</td>`
    linha += '</tr>'

    linhas += linha    
    }

    numero.push(inputNumero.value)

    inputNome.value = ''
    inputNumero.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

