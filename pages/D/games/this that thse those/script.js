let obj = JSON.parse(questions)

let question_hold = document.getElementById('question')

question_hold.innerHTML = obj.questions[1].question_1;

