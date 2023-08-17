const quizData= [
    {
      question:"One in __ 10-19 year olds experience a mental disorder",
      a:"ten",
      b:"twelve",
      c:"seven",
      d:"two",
      correct:"c",
    },
    {
    question:"Which of these is NOT a factor that affects one mental health?",
	a:"Pressure to do well in school",
	b:"Harsh Parenting",
	c:"Violence",
	d:"Socio-Economic factors",
	correct:"a",
    },
    {
        question:"Depression is estimated to occur among _% of 15-19 year olds",
        a:"1.1",
        b:"2.8",
        c:"50",
        d:"12",
        correct:"b",
    },
    {
        question:"Depression and anxiety share some of the same symptoms",
        a:"True",
        b:"False",
        c:"I don't know",
        d:"I don't care but I'll say false",
        correct:"a",
    },
    {
    question:"Which of these is an eating disorder?",
	a:"ADHD",
	b:"OCD",
	c:"Anorexia Nervosa",
	d:"Twig disorder",
	correct:"c",
    },
    {
    question:"Which of these is NOT a sign that one may need help",
	a:"Losing interest in things you normally enjoy",
	b:"difficulty sleeping",
	c:"No motivation to do homework",
	d:"Excessively exercising/binge eating",
	correct:"c",

    }
];

const quiz=document.getElementById('quiz')
const answerEls=document.querySelectorAll('.answer')
const questionEl=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitBtn=document.getElementById('submit')
const closeBtn=document.getElementById('close')
let currentQuiz=0
let score=0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData= quizData[currentQuiz]

    questionEl.innerText= currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d

}

function deselectAnswers(){
    answerEls.forEach(answerEl=> answerEl.checked=false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer=answerEl.id
        }
    }
        )
        return answer
}
function gohome()
{
window.location="http://localhost:5500/quiz.html"
}
submitBtn.addEventListener('click', () => {
    const answer= getSelected()
    if(answer){
        if(answer=== quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        
        if(currentQuiz < quizData.length){
            loadQuiz()

        } else{

            quiz.innerHTML=`
            <h2> You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick="location.reload()"> Retry </button>

            <button onclick="history.back()"> Exit </button>
            `
        }
    }
})

