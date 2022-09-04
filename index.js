//Variveis globais
var numeroAleatorio = 0
var erro = 0
var palpite = 0

//Roda a função ao iniciar a página
window.onload = function () {
    geraNumeroAleatorio()
}

//Faz uma requisição para a API e retorna o número aleatório
async function geraNumeroAleatorio() {
    //Limpa a variavel erro ao fazer uma nova requisição caso algum erro ocorra
    erro = 0
    document.getElementById(`infoPalpite`).innerHTML = "";

    var promise = await fetch('https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300')
    var req = await promise.json()
    
    console.log(validaNumeroAleatorio(req))
    exibeNumeroInicial()
    funcionalidadesBotoes()
}

//Verifica se retornou erro ou um número aleatório
function validaNumeroAleatorio(req) {
    return req.Error ? erro = req.StatusCode : numeroAleatorio = req.value
}

//Valida se o palpite é maior ou menor do que o número aleatório
function validaPalpite(){
    palpite = document.querySelector("#palpite").value
    document.querySelector("#palpite").value = ''
    exibeNumero(palpite)
    funcionalidadesBotoes()
    exibeInfoPalpite()
}

//Função para as funcionalidades dos botões
//Alterar visibilidade e disabled dos botões conforme palpite ou erro
//Habilita o botão de enviar quando o input estiver preenchido
function funcionalidadesBotoes() {
    var inputPalpite = document.getElementById(`palpite`)

    if(erro != 0 || palpite == numeroAleatorio){
        document.getElementById(`novaPartida`).style.display = 'flex'
        document.getElementById(`palpite`).disabled = true;
        document.getElementById(`enviar`).disabled = true;
    } else if( inputPalpite.value == ''){
        document.getElementById(`novaPartida`).style.display = 'none'
        document.getElementById(`palpite`).disabled = false;
        document.getElementById(`enviar`).disabled = true;
    }
    else if(inputPalpite.value != ''){
        document.getElementById(`enviar`).disabled = false;
        document.getElementById(`palpite`).disabled = false;
    }
}

//Exibe o número aleatório ou o erro
function exibeNumeroInicial(){
    if(erro == 0){
        exibeNumero('0')
    } else {
        exibeNumero(`${erro}`)
        exibeInfoPalpite()
    }
}

//Função para permitir apenas números inteiros e positivos no input
function somenteNumeros(num) {
    var er = /[^0-9]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {
      campo.value = "";
    }

    funcionalidadesBotoes()
}

function exibeInfoPalpite(){
    var cor
    document.getElementById(`infoPalpite`).innerHTML = "";
    if(erro != 0) {
        cor = "#CC3300"
        document.getElementById(`infoPalpite`).innerHTML = "<h2>ERRO</h2>";
    } else if (palpite == numeroAleatorio){
        cor = "#32BF00"
        document.getElementById(`infoPalpite`).innerHTML = "<h2>Você acertou</h2>";
    } else if (palpite > numeroAleatorio){
        cor = "#FF6600"
        document.getElementById(`infoPalpite`).innerHTML = "<h2>É menor</h2>";
    } else if (palpite < numeroAleatorio){
        cor = "#FF6600"
        document.getElementById(`infoPalpite`).innerHTML = "<h2>É maior</h2>" ;
    }

    document.getElementById(`infoPalpite`).style.color = cor
}

//Função para exibir o palpite ou erro na tela
function exibeNumero(palpite){
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
        //Verifica se o palpite tem mais de 2 algarismos e gera mais números na tela
        if(palpite.length>1 && p>0){
            document.getElementById(`numero_${p}`).style.display = 'block'
        } else {
            document.getElementById(`numero_1`).style.display = 'none'
            document.getElementById(`numero_2`).style.display = 'none'
        }

        //Preenchimento dos segmentos de acordo com o palpite
        for(i=0;i<numeros[palpite[p]].length;i++){
            var segmento = document.getElementById(`${numeros[palpite[p]][i]}_${p}`);

            //Erro na requisição
            if(erro != 0){
                cor = "#CC3300"
            }
            //Palpite certo
            else if(palpite == numeroAleatorio){
                cor = "#32BF00"
            }
            //Palpite errado
            else{
                cor = "#262A34"
            }

            segmento.style.fill = cor
        }
    }
}

//"Limpa" as cores dos segmentos de todos os números
function resetaNumeros(){
    const segmentos = ['a','b','g','c', 'd','f','e']
    for(n=0;n<3;n++){
        for(i=0;i<segmentos.length;i++){
            var segmento = document.getElementById(`${segmentos[i]}_${n}`);
            segmento.style.fill = "#DDDDDD";
        }
    }
}

//Números para o preenchimento dos segmentos
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