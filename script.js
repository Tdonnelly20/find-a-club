const collection = new Map();




const questions = [
    {
        "question": "I consider myself up-to-date on current events.",
<<<<<<< HEAD
        "answer1": "Strongly Disagree",
        "answer1Total": "ACT -2 POL -2 SAW -2",
        "answer2": "Disagree",
        "answer2Total": "ACT -1 POL -1 SAW -1",
=======
        "answer1": "strongly disagree",
        "answer1Total": "ACT -2 POL -2",
        "answer2": "disagree",
        "answer2Total": "ACT +4 LEE +6",
>>>>>>> 01cd8f3e68a983c90d73f9391867b469d5f0de16
        "answer3": "neutral",
        "answer3Total": "",
        "answer4": "Agree",
        "answer4Total": "ACT +1 POL +1 SAW +1",
        "answer5": "Strongly Agree",
        "answer5Total": "ACT +2 POL +2 SAW +1",
    },

    {
        "question": "I want to make a social impact in my community.",
<<<<<<< HEAD
        "answer1": "Strongly Disagree",
        "answer1Total": "ACT -2 POL -1 SAW -2",
        "answer2": "Disagree",
        "answer2Total": "ACT -1 SAW -1",
        "answer3": "Neutral",
        "answer3Total": "",
        "answer4": "Agree",
        "answer4Total": "ACT +1 SAW +1",
        "answer5": "Strongly Agree",
        "answer5Total": "ACT +2 POL +2 SAW +2",
    },

    {
        "question": "I want to advocate for causes that I believe are important.",
        "answer1": "Strongly Disagree",
        "answer1Total": "ACT -2 POL -1",
        "answer2": "Disagree",
        "answer2Total": "ACT -1",
        "answer3": "Neutral",
        "answer3Total": "",
        "answer4": "Agree",
        "answer4Total": "ACT +1 SAW +1",
        "answer5": "Strongly Agree",
        "answer5Total": "ACT +2 POL +2 SAW +2",
    },

    {
        "question": "I like to stay active/on the go.",
        "answer1": "Strongly Disagree",
        "answer1Total": "FIT -2 SPO -1",
        "answer2": "Disagree",
        "answer2Total": "FIT -1",
        "answer3": "Neutral",
        "answer3Total": "",
        "answer4": "Agree",
        "answer4Total": "FIT +1 SPO +1",
        "answer5": "Strongly Agree",
        "answer5Total": "FIT +2 SPO +2",
    },

    {
        "question": "I seek out new experiences.",
        "answer1": "Strongly Disagree",
        "answer1Total": "FIT -2 HUM -2 NET -2 SOC -1 SPE -2",
        "answer2": "Disagree",
        "answer2Total": "FIT -1 HUM -1 NET -1 SPE -1",
        "answer3": "Neutral",
        "answer3Total": "",
        "answer4": "Agree",
        "answer4Total": "FIT +1 HUM +1 NET +1 SPE +1",
        "answer5": "Strongly Agree",
        "answer5Total": "FIT +2 HUM +2 NET +2 SOC +1 SPE +2",
    },

    {
        "question": "I want to pick up a new hobby/skill while in college.",
        "answer1": "Strongly Disagree",
        "answer1Total": "FIT -2 HUM -2 NET -1 SPE -2",
        "answer2": "Disagree",
        "answer2Total": "FIT -1 HUM -1 SPE -1",
        "answer3": "Neutral",
        "answer3Total": "",
        "answer4": "Agree",
        "answer4Total": "FIT +1 HUM +1 SPE +3",
        "answer5": "Strongly Agree",
        "answer5Total": "FIT +2 HUM +2 NET +1 SPE +4",
    },

    {
        "question": "I am an athletic person.",
        "answer1": "Strongly Disagree",
        "answer1Total": "FIT -2 SPO -2",
        "answer2": "Disagree",
        "answer2Total": "FIT -1 SPO +1",
        "answer3": "Neutral",
        "answer3Total": "",
        "answer4": "Agree",
        "answer4Total": "FIT +1 SPO +1",
        "answer5": "Strongly Agree",
        "answer5Total": "FIT +2 SPO +2",
    },

    {
        "question": "I wanna party.",
        "answer1": "Strongly Disagree",
        "answer1Total": "NET -2 SOC -2",
        "answer2": "Disagree",
        "answer2Total": "NET -1 SOC -1",
        "answer3": "Neutral",
        "answer3Total": "",
        "answer4": "Agree",
        "answer4Total": "NET +1 SOC +1",
        "answer5": "Strongly Agree",
        "answer5Total": "NET +2 SOC +2",
    },

    {
        "question": "I want to meet people from within my major.",
        "answer1": "Strongly Disagree",
        "answer1Total": "ACA -2",
        "answer2": "Disagree",
        "answer2Total": "ACA -1",
        "answer3": "Neutral",
        "answer3Total": "",
        "answer4": "Agree",
        "answer4Total": "ACA +1 NET +1",
        "answer5": "Strongly Agree",
        "answer5Total": "ACA +2 NET +1 SOC +2",
    },

    {
        "question": "I enjoy writing.",
        "answer1": "Strongly Disagree",
        "answer1Total": "WRI -2",
        "answer2": "Disagree",
        "answer2Total": "WRI -1",
        "answer3": "Neutral",
        "answer3Total": "",
        "answer4": "Agree",
        "answer4Total": "WRI +1",
        "answer5": "Strongly Agree",
        "answer5Total": "WRI +2",
    },

    {
        "question": "I enjoy being in the spotlight -- literally and figuratively.",
        "answer1": "Strongly Disagree",
        "answer1Total": "COM -2 NET -1 PER -2 SOC -1 THR -2",
        "answer2": "Disagree",
        "answer2Total": "COM -1 PER -1 THR -1",
        "answer3": "Neutral",
        "answer3Total": "",
        "answer4": "Agree",
        "answer4Total": "COM +1 PER +1 THR +1",
        "answer5": "Strongly Agree",
        "answer5Total": "COM +2 PER +2 NET +1 SOC +1 THR +2",
    },

    {
        "question": "I like music.",
        "answer1": "Strongly Disagree",
        "answer1Total": "MUS -2 PER -1 THR +1",
        "answer2": "Disagree",
        "answer2Total": "MUS -1",
        "answer3": "Neutral",
        "answer3Total": "",
        "answer4": "Agree",
        "answer4Total": "MUS +1",
        "answer5": "Strongly Agree",
        "answer5Total": "MUS +2 PER +2 THR +1",
    },

    {
        "question": "I play a musical instrument.",
        "answer1": "Strongly Disagree",
        "answer1Total": "MUS -2 PER -2 THR -1",
        "answer2": "Disagree",
        "answer2Total": "PER -1 MUS -1",
        "answer3": "Neutral",
        "answer3Total": "",
        "answer4": "Agree",
        "answer4Total": "MUS +1 PER +1",
        "answer5": "Strongly Agree",
        "answer5Total": "MUS +2 PER +2 THR +1",
    },

    {
        "question": "I am a religious person.",
        "answer1": "Strongly Disagree",
        "answer1Total": "REL -2",
        "answer2": "Disagree",
        "answer2Total": "REL -1",
        "answer3": "Neutral",
        "answer3Total": "",
        "answer4": "Agree",
        "answer4Total": "REL +1",
        "answer5": "Strongly Agree",
        "answer5Total": "REL +2",
    },

    {
        "question": "I like improv.",
        "answer1": "Strongly Disagree",
        "answer1Total": "COM -2 PER -2 THR -1",
        "answer2": "Disagree",
        "answer2Total": "COM -1 PER -1",
        "answer3": "Neutral",
        "answer3Total": "",
        "answer4": "Agree",
        "answer4Total": "COM +1 PER +1 SPE +1",
        "answer5": "Strongly Agree",
        "answer5Total": "COM +2 PER +2 THR +1 SPE +2",
    },

    {
        "question": "I like spending time outdoors.",
        "answer1": "Strongly Disagree",
        "answer1Total": "COM -2 PER -2",
        "answer2": "Disagree",
        "answer2Total": "COM -1 PER -1",
        "answer3": "Neutral",
        "answer3Total": "",
        "answer4": "Agree",
        "answer4Total": "COM +1 PER +1",
        "answer5": "Strongly Agree",
        "answer5Total": "COM +2 PER +2",
=======
        "answer1": "strongly disagree",
        "answer1Total": "ACT +4 LEE +6",
        "answer2": "disagree",
        "answer2Total": "2",
        "answer3": "neutral",
        "answer3Total": "3",
        "answer4": "agree",
        "answer4Total": "2",
        "answer5": "strongly agree",
        "answer5Total": "2",
>>>>>>> 01cd8f3e68a983c90d73f9391867b469d5f0de16
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
    
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;
    const option5Total = questions[index].answer5Total;
    //Populate html elements
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    
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

    
    for(let i = 0; i <  dataString.length; i+=7) {
        
        if(!isCharNumber(dataString.charAt(i))) {
            currentAnswerTag = dataString.substring(i, i+3);
            currentAnswerID = Number(dataString.substring(i+5, i+6));

            if(dataString.charAt(i + 4) == '-') { // must also put '+' sign to ensure proper spacing
                currentAnswerID = -1*currentAnswerID;
            }
            answerScoreId = dataString.substring(i + 5, i + 6);

          
            answerScoreTag.push(currentAnswerTag);
            answerScoreIdentification.push(currentAnswerID);

        }
    }

    for(let i = 0; i < answerScoreTag.length; i++) {
        let existingNum = collection.get(answerScoreTag[i]);
        if(typeof existingNum == 'undefined'){
            existingNum = 0;
        }

        existingNum += answerScoreIdentification[i];

        console.log(existingNum);

        collection.set(answerScoreTag[i], existingNum);
    }

   

    // add the answer score to the score array
    selectedAnswersData.push();

    // increment the current question number (to be used as the index for each array)
    currentQuestion++;

    // once finished, clear checked
    selectedOption.checked = false;
    // behavior for the final question
<<<<<<< HEAD
    if (currentQuestion == totalQuestions - 1) {
        for (let [key, value] of collection) {
            console.log(`${key} = ${value}`);
        }
=======
    if(currentQuestion == totalQuestions - 1) {
        
>>>>>>> 01cd8f3e68a983c90d73f9391867b469d5f0de16
        nextButton.textContent = 'Finish';
    }

    // if the quiz is finished then we hide the questions container and show the results
    if(currentQuestion == totalQuestions) {

        for (let [key, value] of collection) {
            console.log(`${key} = ${value}`);
        }
        container.style.display = 'none';
        result.innerHTML =
        `<div class="final">
        <h1 class="final-score">Your score: ${10}</h1>
        <div class="summary">
            <h1>Summary</h1>
            <p>Possible - Personality Traits, see below for a summary based on your results:</p>
            <p>15 - 21- You Need Help</p>
            <p>10 - 15 - Good Soul</p>
            <p>5 - 10 - Meh </p>
            <p>5 - Are You Even Real</p>
        </div>
        <button class="restart btn-hover color-1">Restart Quiz</button></div>`;
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
