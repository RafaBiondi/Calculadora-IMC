import { Modal } from './modal.js'
import { alertError } from './alert-error.js'
import { calculateIMC, NaN } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = (e) => {
    e.preventDefault()

    const height = inputHeight.value
    const weight = inputWeight.value

    const weightOrHeightIsNotANumber = NaN(weight) || NaN(height)

    if (weightOrHeightIsNotANumber) {
        alertError.open()
        return;  
    }

    alertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage (result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

// Fechar a janela de erro ao começar a digitar no campo do input
inputWeight.oninput = () => alertError.close()
inputHeight.oninput = () => alertError.close()