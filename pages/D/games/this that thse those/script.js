
i = 0;
fetch('quiz.json')
    .then(response => response.json())
    .then(data => {
        i = 0;
        let question_hold = document.getElementById('question');
        for ( i in data.questions) {
            question_hold.innerHTML = data.questions[i].question;
            resposta = data.questions[i].answer;
            console.log(resposta)
            i += 1
        }
    })
    .catch(error => console.error('Erro ao carregar JSON:', error));
// fetch para receber as pergunts do json



let opcao = document.getElementsByClassName('option-text')
let options = document.getElementById('options')



i = 0
let array = []

while (i < 4) {
    const Textoptions = ["This", "That", "These", "Those"]
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


options.addEventListener('click', Testar)

function Testar() {
    
}