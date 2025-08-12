

// fetch para receber as pergunts do json 

fetch('quiz.json')
    .then(response => response.json())
    .then(data => {
        let question_hold = document.getElementById('question');
        question_hold.innerHTML = data.questions[0].question_1; 
        resposta = data.questions[0].answer;
        console.log(resposta)
    })
    .catch(error => console.error('Erro ao carregar JSON:', error));


let opcao = document.getElementsByClassName('option-text')
let options = document.getElementById('options')



i = 0
let array = []

while (i < 4) {
    const Textoptions = [ "This", "That", "These", "Those"]
    randomIndex = Math.floor(Math.random() * Textoptions.length)
    if (array.includes(randomIndex) == true) {

    } else {
        opcao.item(i).innerText = Textoptions[randomIndex]
        array.push(randomIndex)
        Textoptions.splice(randomIndex)
        i += 1

    }
}

// function Verificar() {
//     if (resposta == )
// }

options.addEventListener('click', Verificar)

