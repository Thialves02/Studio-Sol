var numeroAleatorio = 0
var erro = 0

window.onload = function () {
    geraNumeroAleatorio()
}

async function geraNumeroAleatorio() {
    var promise = await fetch('https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300')
    var req = await promise.json()
    
    return validaNumeroAleatorio(req)
}

function validaNumeroAleatorio(req) {
    return req.Error ? erro = req.StatusCode : numeroAleatorio = req.value
}

function validaPalpite(){
    var palpite = parseInt(document.querySelector("#palpite").value)

    document.querySelector("#palpite").value = ''
    return numeroAleatorio != 0 && palpite > numeroAleatorio ? console.log("É menor") : console.log("É maior")
}