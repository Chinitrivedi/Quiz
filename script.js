const quizData = [
    {
        question: "1.Which of the following states is sole producer of agate, chalk, and perlite in India?",
        a: "Rajasthan",
        b: "Karnataka",
        c: "Gujarat",
        d: "Tamil Nadu",
        correct: "c",
    },

    {
        question: "2.The India-Myanmar Friendship Road connects which among the following states of India with Myanmar?",
        a: "Assamn",
        b: "Manipur",
        c: "Meghalayat",
        d: "Nagaland",
        correct: "b",
    },

    {
        question: "3.In which city of India, 90% of worlds small diamonds processed?",
        a: "Baroda",
        b: "Mumbai",
        c: "Surat",
        d: "Jaipur",
        correct: "c",
    },

    {
        question: "4.Which among the following longitudes determines Indian standard Time?",
        a: "85.5° E",
        b: "83.5° E",
        c: "82.5° E",
        d: "84.5° E",
        correct: "c",
    },

    {
        question: "5.Uttar Pradesh shares it borders with how many states ?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        correct: "d",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c 
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)

}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer===quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()

        } else {
            quiz.innerHTML = `
            <h2> You answered ${score}/${quizData.length} questions correctly</h2> 
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})