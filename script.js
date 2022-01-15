const collection = new Map();

const questions = [
    {
        "question": "I consider myself up-to-date on current events.",
        "answer1": "strongly disagree",
        "answer1Total": "ACT -2 POL -2",
        "answer2": "disagree",
        "answer2Total": "BRU +4 LEE +6",
        "answer3": "neutral",
        "answer3Total": "3",
        "answer4": "agree",
        "answer4Total": "2",
        "answer5": "strongly agree",
        "answer5Total": "2",
    },

    {
        "question": "I want to make a social impact in my community.",
        "answer1": "strongly disagree",
        "answer1Total": "Activist -2",
        "answer2": "disagree",
        "answer2Total": "2",
        "answer3": "neutral",
        "answer3Total": "3",
        "answer4": "agree",
        "answer4Total": "2",
        "answer5": "strongly agree",
        "answer5Total": "2",
    },

]


let currentQuestion = 0;

//const ht = new HashTable();

let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
console.log(option1);
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const option5 = document.querySelector('.option5');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//Function to generate question
function generateQuestions (index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    console.log(option1Total);
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;
    const option5Total = questions[index].answer5Total;
    //Populate html elements
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    console.log(option1.getAttribute('data-total'));
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`);
    option5.setAttribute('data-total', `${option5Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
    option5.innerHTML = `${question.answer5}`
}

function isCharNumber(c) {
    return c >= '0' && c <= '9';
  }


function loadNextQuestion() {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    // check if there is a radio input checked
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    // get value of selected radio
    const dataString = String(selectedOption.nextElementSibling.getAttribute('data-total'));

    let answerScoreTag = [];

    let answerScoreIdentification = [];

    let currentAnswerTag;
    let currentAnswerID;

    console.log("dataString length: " + dataString.length);
    for(let i = 0; i <  dataString.length; i+=7) {
        console.log("location: " + i);
        if(!isCharNumber(dataString.charAt(i))) {
            currentAnswerTag = dataString.substring(i, i+3);
            currentAnswerID = Number(dataString.substring(i+5, i+6));

            if(dataString.charAt(i + 4) == '-') { // must also put '+' sign to ensure proper spacing
                currentAnswerID = -1*currentAnswerID;
            }
            answerScoreId = dataString.substring(i + 5, i + 6);

            console.log(currentAnswerTag);
            console.log(currentAnswerID);
            answerScoreTag.push(currentAnswerTag);
            answerScoreIdentification.push(currentAnswerID);

        }
    }

    for(let i = 0; i < answerScoreTag.length; i++) {
        collection.set(answerScoreTag[i], answerScoreIdentification[i]);
    }

    console.log(answerScoreIdentification[0]);
    console.log(answerScoreTag[0]);

    // add the answer score to the score array
    selectedAnswersData.push();

    // increment the current question number (to be used as the index for each array)
    currentQuestion++;

    // once finished, clear checked
    selectedOption.checked = false;
    // behavior for the final question
    if(currentQuestion == totalQuestions - 1) {
        for (let [key, value] of collection) {
            console.log(`${key} = ${value}`);
        }
        nextButton.textContent = 'Finish';
    }

    // if the quiz is finished then we hide the questions container and show the results
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.innerHTML =
        `<h1 class="final-score">Your score: ${totalScore}</h1>
        <div class="summary">
            <h1>Summary</h1>
            <p>Possible - Personality Traits, see below for a summary based on your results:</p>
            <p>15 - 21- You Need Help</p>
            <p>10 - 15 - Good Soul</p>
            <p>5 - 10 - Meh </p>
            <p>5 - Are You Even Real</p>
        </div>
        <button class="restart">Restart Quiz</button>`;
        return;
    }
    generateQuestions(currentQuestion);
}

// function to load previous question
function loadPreviousQuestion() {
    // decrement quentions index
    currentQuestion--;
    // remove last array value;
    score.pop();
    // generate the question
    generateQuestions(currentQuestion);
}


// function to reset and restart the quiz
function restartQuiz(e) {
    if(e.target.matches('button')) {
      // reset array index and score
      currentQuestion = 0;
      score = [];
      // reload quiz to the start
      location.reload();
    }
}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);
