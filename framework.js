function sendMessage(message, coloured = false) {
    let textBar = document.createElement('div')
    textBar.textContent = message
    textBar.className = 'outputText'
    if(coloured) textBar.style.color = 'red'
    document.querySelector('.output').appendChild(textBar)
    document.querySelector('.output').scrollTop += 100
}

let possibleAnswers
document.querySelector('.input').addEventListener('keypress', event => {
    if(event.which == 13) {
        let currentAnswer = document.querySelector('.input').value
        if(possibleAnswers && possibleAnswers.value.includes(currentAnswer) || !possibleAnswers) possibleAnswers = it.next(document.querySelector('.input').value)
        else sendMessage('Input not accepted. Please try again.')
        document.querySelector('.input').value = ''
    }
})
var it = main()
it.next()

/*
Input usage example

function *main() {
    sendMessage('Hello, what is your name?')
    let answer = yield
    sendMessage('Your name is ' + answer + '. Confirm? y/n')
    answer = yield ['y', 'n']
    sendMessage(answer)
}
*/