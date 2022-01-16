const collection = new Map();
const clubs = new Map();
setCollection();
const questions = [
    {
        "question": "What major disipline are you in?",
        "answer1": "Science",
        "answer1Total": "STE +2",
        "answer2": "Engineering/Technology",
        "answer2Total": "ARC +2 ROB +2 ENG +2 STE +2",
        "answer3": "Art/Game Development",
        "answer3Total": "MUS +2 CHR +2 THR +2 MED +2 PER +2 WRI +2",
        "answer4": "Math",
        "answer4Total": "ACM +2 STE +2 FIN +2",
        "answer5": "Buisness/Other",
        "answer5Total": "WRI +2 FIN +2 JRM +2",
    },
   {
        "question": "I consider myself up-to-date on current events.",
        "answer1": "strongly disagree",
        "answer1Total": "ACT -2 POL -2",
        "answer2": "disagree",
        "answer2Total": "BRU +4 LEE +6",
        "answer1": "Strongly Disagree",
        "answer1Total": "ACT -2 POL -2 SAW -2",
        "answer2": "Disagree",
        "answer2Total": "ACT -1 POL -1 SAW -1",
        "answer3": "Neutral",
        "answer3Total": "",
        "answer4": "Agree",
        "answer4Total": "ACT +1 POL +1 SAW +1",
        "answer5": "Strongly Agree",
        "answer5Total": "ACT +2 POL +2 SAW +1",
    },

    {
        "question": "I want to make a social impact in my community.",
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
        "question": "I like to solve problems.",
        "answer1": "Strongly Disagree",
        "answer1Total": "ENG -2 STE -2 FIN -2",
        "answer2": "Disagree",
        "answer2Total": "ENG -1  STE -1 FIN -1",
        "answer3": "Neutral",
        "answer3Total": "",
        "answer4": "Agree",
        "answer4Total": "ENG +1 STE +1 FIN +1",
        "answer5": "Strongly Agree",
        "answer5Total": "ENG +2 STE +2 FIN +2",
    },

    {
        "question": "I want to pick up a new hobby/skill while in college.",
        "answer1": "Strongly Disagree",
        "answer1Total": "FIT -2 HUM -2 NET -1 SPE -2 FIN -2 SPI -2",
        "answer2": "Disagree",
        "answer2Total": "FIT -1 HUM -1 SPE -1 FIN -1 SPI -1",
        "answer3": "Neutral",
        "answer3Total": "",
        "answer4": "Agree",
        "answer4Total": "FIT +1 HUM +1 SPE +3 FIN +1 SPI +1",
        "answer5": "Strongly Agree",
        "answer5Total": "FIT +2 HUM +2 NET +1 SPE +4 FIN +2 SPI +2",
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
        "question": "I like history.",
        "answer1": "Strongly Disagree",
        "answer1Total": "SPE -2",
        "answer2": "Disagree",
        "answer2Total": "SPE -1",
        "answer3": "Neutral",
        "answer3Total": "",
        "answer4": "Agree",
        "answer4Total": "SPE +1",
        "answer5": "Strongly Agree",
        "answer5Total": "SPE +2",
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
    }, 

]


let currentQuestion = 0;

//const ht = new HashTable();

let score = [];
let selectedAnswersData = [];
let tier1 = [];
let tier2 = [];
let tier3 = [];
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
function setCollection(){
    collection.set("SAW","0");
    collection.set("ACC","0");
    collection.set("ACT","0");
    collection.set("POL","0");
    collection.set("ACA","0");
    collection.set("ACM","0");
    collection.set("STE","0");
    collection.set("SPE","0");
    collection.set("MUS","0");
    collection.set("CHR","0");
    collection.set("THR","0");
    collection.set("NET","0");
    collection.set("SOC","0");
    collection.set("REL","0");
    collection.set("CHY","0");
    collection.set("ATH","0");
    collection.set("ENG","0");
    collection.set("MED","0");
    collection.set("SPI","0");
    collection.set("PSY","0");
    collection.set("MNH","0");
    collection.set("FIT","0");
    collection.set("ROB","0");
    collection.set("SPO","0");
    collection.set("COM","0");
    collection.set("RAD","0");
    collection.set("JRM","0");
    collection.set("WRI","0");
    collection.set("ARC","0");
    collection.set("PER","0");
    collection.set("HUM","0");
    collection.set("FIN","0");
}
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
        collection.set(answerScoreTag[i], answerScoreIdentification[i]);
    }

    //console.log(answerScoreIdentification[0]);
    //console.log(answerScoreTag[0]);

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
        analyzeResults();
        container.style.display = 'none';
        var tier1String=tier1.join(', ');
        var tier2String=tier2.join(', ');
        var tier3String=tier3.join(', ');
        console.log(tier1String);
        result.innerHTML =
        `<div class="final"  style="text-align:center; color:black;font:'Be Vietnam Pro', sans-serif;">
            <div class="summary" style="color:black;font-size:23;margin-left:15%;margin-right:15%;margin-bottom:5%;">
                <h4 style="color:black;">Clubs you will love: </h4>
                <p>${tier1String}</p>
                <h4 style="color:black;">Clubs you might like: </h4>
                <p>${tier2String}</p>
                <h4 style="color:black;">Clubs you won't like: </h4>
                <p>${tier3String}</p>
            </div>
            <button class="restart btn-hover color-1">Restart Quiz</button>
            </div>`;
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
        setCollection();
      // reset array index and score
      currentQuestion = 0;
      score = [];
      // reload quiz to the start
      location.reload();
    }
}

function analyzeResults() {
    loadClubs();
  
  for(let [key,value] of clubs){
    let result=tallyPoints(key).split(" ");
    let score=result[1];
    //console.log(key+"'s score is "+score);
    if(score >= 2) {
       // console.log(key + " is tier 1");
        tier1.push(key);
      }
  
      if (score < 2 && score > 0) {
        //console.log(key + " is tier 2");
        tier2.push(key);
      }
  
      if (score < 0) {
        //console.log(key + " is 'totally uninterested' tier");
        tier3.push(key);
      }
    
  };
  console.log("Tier 1: ");
  tier1.forEach(element => {
    console.log(element);
  });
  console.log("Tier 2: ");
  tier2.forEach(element => {
    console.log(element);
  });
  console.log("Tier 3: ");
  tier3.forEach(element => {
    console.log(element);
  });
}
function tallyPoints(club){
    //console.log("Value: "+clubs.get(club));
    let value=clubs.get(club).split(' ');
    let link=value[0];
    let score=0;
    for (let index = 1; index < value.length; index++) {
        score =+ collection.get(value[index]);
        //console.log(value[index]+" has a score of "+collection.get(value[index]));
    }
   // console.log("Score: "+score);
    let result=link+" "+score;
    return result;
}
function loadClubs(){  
    clubs.set("Student Comedy Productions","https://wpi.campuslabs.com/engage/organization/student-comedy-productions PER THR SPI");
    clubs.set("Masque","https://wpi.campuslabs.com/engage/organization/masque PER THR");
    clubs.set("Robotics Club","https://wpi.campuslabs.com/engage/organization/robotics-club ROB STE ACA");
    clubs.set("American Society of Civil Engineers","https://wpi.campuslabs.com/engage/organization/american-society-of-civil-engineers ENG STE ACA SPE");
    clubs.set("American Society of Mechanical Engineers","https://wpi.campuslabs.com/engage/organization/american-society-of-mechanical-engineers ENG STE ACA SPE");
    clubs.set("Association for Computing Machinery","https://wpi.campuslabs.com/engage/organization/acm STE ACA SPE");
    clubs.set("Fencing Club","https://wpi.campuslabs.com/engage/organization/fencing-club FIT SPO");
    clubs.set("Science Fiction Society","https://wpi.campuslabs.com/engage/organization/sfs MED SPI");
    clubs.set("Photography Club","https://wpi.campuslabs.com/engage/organization/photography-club MED SPI");
    clubs.set("College Democrats","https://wpi.campuslabs.com/engage/organization/collegedems POL SOC ACT");
    clubs.set("College Republicans","https://wpi.campuslabs.com/engage/organization/wpicr POL SAW ACT");
    clubs.set("Greek life in general","N/A NET SOC");
    clubs.set("WWPI Campus RAD","https://wpi.campuslabs.com/engage/organization/wwpi-campus-RAD COM RAD JRM");
    clubs.set("VOX","https://wpi.campuslabs.com/engage/organization/vox PER MUS THR");
    clubs.set("PSY Society","https://wpi.campuslabs.com/engage/organization/PSY-society PSY MNH ACA");
    clubs.set("Tech News","https://wpi.campuslabs.com/engage/organization/towers WRI JRM ACT");
    clubs.set("LEGO Club","https://wpi.campuslabs.com/engage/organization/legoclub ARC ENG SPI");
    clubs.set("Newman Club","https://wpi.campuslabs.com/engage/organization/newman-club Religion CHY");
    clubs.set("Alden Voices","https://wpi.campuslabs.com/engage/organization/aldenvoices MUS CHR THR");
    clubs.set("The Pagan Circle","https://wpi.campuslabs.com/engage/organization/pagancircle REL ATH");
    clubs.set("Investing Association","https://wpi.campuslabs.com/engage/organization/investwpi FIN ACM");
    clubs.set("ACM Club","https://wpi.campuslabs.com/engage/organization/actuarial-math-club ACA ACM STE SPE");
    clubs.set("Storybox Books","https://wpi.campuslabs.com/engage/organization/storyboxbooks SAW ACT");
    clubs.set("ACCESS: Students advocating for campus and educational","https://wpi.campuslabs.com/engage/organization/access SAW ACC ACT");
    clubs.set("Rubik's Cube Club","https://wpi.campuslabs.com/engage/organization/cubeclub SPI ENG STE");
    clubs.set("Locksport Club","https://wpi.campuslabs.com/engage/organization/locksport SPI");
    clubs.set("Outing Club","https://wpi.campuslabs.com/engage/organization/outing-club FIT SPO");
    clubs.set("Society of Martial Artists","https://wpi.campuslabs.com/engage/organization/soma FIT SPO SPE");
}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);
