const quizData = [
    {
        question: 'How old is Mikias?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },{
        question: 'What is the most used programming language in 2019 ?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },{
        question: 'Who is the President of US?',
        a: 'Mikias Berhanu',
        b: 'Donald Trump',
        c: 'Mark Zarkerburg',
        d: 'Elon Musk',
        correct: 'd'
    },{
        question: 'What dose HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Casecading Style Sheet',
        c: 'Hello World',
        d: 'Application Programming Interface',
        correct: 'a'
    },{
        question: 'What is your hobby ?',
        a: 'Food',
        b: 'Clothes',
        c: 'Movies',
        d: 'Cars',
        correct: 'd'
    }
]

let currentQuestion = 0;
let score = 0;
let currentQuestionAnswer = undefined;

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const currentQuestionEl = document.getElementById('question');
const submitButton = document.getElementById('submit');
const quizeBody = document.getElementById('quize-container');

function loadQuize(){
    if(currentQuestion < quizData.length){
        let currentQuestionData = quizData[currentQuestion];
        currentQuestionAnswer = currentQuestionData.correct;
        currentQuestionEl.innerText = currentQuestionData.question;
        a_text.innerText = currentQuestionData.a;
        b_text.innerText = currentQuestionData.b;
        c_text.innerText = currentQuestionData.c;
        d_text.innerText = currentQuestionData.d;
    }else{
        quizeBody.innerHTML = `<h2>You have answered ${score} out of ${quizData.length} questions</h2>`
    }
}

function getSelected(){
     let answerEls = document.querySelectorAll('.answer');
     let answerId = undefined;
     answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answerId = answerEl.id;
        }
     });

    return answerId;
}

function uncheckRadioButtons(){
    let radioButtons = document.querySelectorAll('.answer');
    radioButtons.forEach(button => {
        button.checked = false;
    });
}

loadQuize()

submitButton.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === currentQuestionAnswer){
            score += 1
        }
        currentQuestion++;
        uncheckRadioButtons();
        loadQuize();
    }else{
        submitButton.disabled = true;
        alert('Choose one answer');
    }
});