//porcurar o botao e executar a acao de duplicar os campos apos o click

document.querySelector("#add-time").addEventListener('click', cloneField)

//acao de duplicar o campo
function cloneField() {
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos
    const fields = newFieldsContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = ""
    })

    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}