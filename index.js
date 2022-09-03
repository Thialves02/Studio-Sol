var numeroAleatorio = 0
var erro = 0
var palpite = 0

//Roda as funções ao iniciar a página
window.onload = function () {
    geraNumeroAleatorio()
}

//Faz uma requisição para a API e retorna o número aleatório
async function geraNumeroAleatorio() {
    var promise = await fetch('https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300')
    var req = await promise.json()
    
    console.log(validaNumeroAleatorio(req))

    exibeNumeroInicial()
}

//Verifica se retornou erro ou um número aleatório
function validaNumeroAleatorio(req) {
    return req.Error ? erro = req.StatusCode : numeroAleatorio = req.value
}

//Retorna se o 
function validaPalpite(){
    
    palpite = document.querySelector("#palpite").value
    exibePalpite(palpite)
    
    document.querySelector("#palpite").value = ''
    return numeroAleatorio != 0 && palpite > numeroAleatorio ? console.log("É menor") : console.log("É maior")
}

//Exibe o número aleatório ou o erro
function exibeNumeroInicial(){
    erro == 0 ? exibePalpite('0') : exibePalpite(`${erro}`)
}

function exibePalpite(palpite){
    var cor
    resetaNumeros()
    const numeros = {
        0:numZero(),
        1:numUm(),
        2:numDois(),
        3:numTres(),
        4:numQuatro(),
        5:numCinco(),
        6:numSeis(),
        7:numSete(),
        8:numOito(),
        9:numNove(),
    }

    //For que verifica a quantidade de números digitados
    for (var p = 0; p < palpite.length; p++) {
        if(palpite.length>1 && p>0){
            document.getElementById(`numero_${p}`).style.display = 'block'
        } else {
            document.getElementById(`numero_1`).style.display = 'none'
            document.getElementById(`numero_2`).style.display = 'none'
        }

        for(i=0;i<numeros[palpite[p]].length;i++){
            var linha = document.getElementById(`${numeros[palpite[p]][i]}_${p}`);

            if(erro != 0){
                cor = "#CC3300"
                document.getElementById(`novaPartida`).style.display = 'block'
                document.getElementById(`enviar`).style.disabled = true;
            }
            else if(palpite == numeroAleatorio){
                cor = "#32BF00"
                document.getElementById(`novaPartida`).style.display = 'block'
                document.getElementById(`enviar`).style.disabled = true;
            }
            else{
                cor = "#262A34"
            }

            linha.style.fill = cor
        }
    }
}

function resetaNumeros(){
    const linhas = ['a','b','g','c', 'd','f','e']
    for(n=0;n<3;n++){
        for(i=0;i<linhas.length;i++){
            var linha = document.getElementById(`${linhas[i]}_${n}`);
            linha.style.fill = "#DDDDDD";
        }
    }
}


function numZero(){
    return ['a', 'b', 'c', 'd', 'e', 'f','e']
}

function numUm(){
    return ['b','c']
}

function numDois(){
    return ['a','b','g','e','d']
}

function numTres(){
    return ['a','b','g','c','d']
}

function numQuatro(){
    return ['f','g','b','c']
}

function numCinco(){
    return ['a','f','g','c', 'd']
}

function numSeis(){
    return ['a','f','g','e','d','c']
}

function numSete(){
    return ['a','b','c']
}

function numOito(){
    return ['a','b','g','c', 'd','f','e']
}

function numNove(){
    return ['a','b','g','c', 'd','f',]
}

/* function numErro(){

} */