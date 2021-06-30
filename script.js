let quizData = [
    {
        question: 'Kako se zove glavni junak iz serijala Sam u kući?',
        a: 'Majkl Mekalister',
        b: 'Kevin Mekalister',
        c: 'Džon Mekalister',
        correct: 'b'
    },
    {
        question: 'U kom gradu živi poroodica Mekalister?',
        a: 'Njujork',
        b: 'Čikago',
        c: 'Boston',
        correct: 'b'
    },
    {
        question: 'Prvi film je snimljen 1990, a koje godine je snimljen drugi?',
        a: '1993',
        b: '1991',
        c: '1992',
        corretc: 'c'
    },
    {
        question: 'Kako se zovu kriminalci koji proganjaju Kevina u prvom i drugom dijelu?',
        a: 'Deni i Marv',
        b: 'Harvi i Deni',
        c: 'Hari i Marv',
        correct: 'c'
    },
    {
        question: 'U prvom, dijelu dva nespretna kriminalca su sebe nazvali "mokri banditi", a na kraju drugog dijela su?',
        a: 'blatnjavi banditi',
        b: 'ljepljivi banditi',
        c: 'nevidljivi banditi',
        correct: 'b'
    }
]

let answerEls = document.querySelectorAll('.answer');
let quiz = document.getElementById('quiz');
let questionEl = document.getElementById('question');
let a_text = document.getElementById('a_text');
let b_text = document.getElementById('b_text');
let c_text = document.getElementById('c_text');
let submitBtn = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    deselectAnswers();

    let currentQuizData = quizData[currentQuestion];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
}

loadQuiz();

function getSelected () {
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })

    return answer;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    let answer = getSelected();

    console.log(answer)

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>Tačno ste odgovorili na ${score}/${quizData.length} pitanja!</h2>`
        }
    }    
})