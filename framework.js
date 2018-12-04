function sendMessage(message, coloured = false) {
    let textBar = document.createElement('div')
    textBar.textContent = message
    textBar.className = 'outputText'
    if(coloured) textBar.style.color = 'red'
    document.querySelector('.output').appendChild(textBar)
    document.querySelector('.output').scrollTop += 100
}

document.querySelector('.input').addEventListener('keypress', event => {
    if(event.which == 13) {
        userInput = document.querySelector('.input').value
        document.querySelector('.input').value = ''
    }
})

let userInput = ''
let interval
function input(answers) {
    return new Promise(resolve => {
        let interval = setInterval(() => {
            if(userInput) {
                sendMessage(userInput, true)
                if(!answers || answers.find(element => element == userInput)) {
                    clearInterval(interval)
                    resolve(userInput), userInput = ''
                }
                else {
                    sendMessage('Input not accepted. Please try again.')
                    userInput = ''
                }
            }
        }, 10)
    })
}

/*
Input usage example

test()
async function test() {
    sendMessage('Hello, what is your name?')
    let answer = await input()
    sendMessage('Your name is ' + answer + '. Confirm? y/n')
}
*/