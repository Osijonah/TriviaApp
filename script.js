async function startQuiz() {
    const requestURL =
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const quizQuestions = await response.json();
  
    populateQuiz(quizQuestions);
}

// function to check for true and false buttton clicks

let btnClicked = false;
const isClicked = () => {
    btnClicked = true;
}


// Quiz Page Content
const questionTitle = document.querySelector(`.question-title`);
const question = document.querySelector(`.question`);



const contentSpace =  document.querySelector(`main`);
const textDiv = document.querySelector(`.text`);
const figure  = document.querySelector(`figure`);

document.querySelector(`.begin-btn`).addEventListener(`click`, startQuiz);

const quizDiv = document.createElement(`div`);
const questionDiv = document.createElement(`div`);
const questionTitleParagraph = document.createElement(`p`);
const questionParagraph = document.createElement(`p`);
const btnDiv = document.createElement(`div`);
const trueBtn = document.createElement(`div`);
const falseBtn = document.createElement(`div`);
const contBtnDiv = document.createElement(`div`);
const contBtn = document.createElement(`a`);


// Adding classes to quiz page element
quizDiv.classList.add(`text`, `question-text`);
questionTitleParagraph.classList.add(`question-title`);
questionParagraph.classList.add(`question`);
btnDiv.classList.add(`answer-btns`);
trueBtn.classList.add(`true-btn`);
falseBtn.classList.add(`false-btn`);
contBtn.classList.add(`btn`);

// for display of buttons on quiz page
trueBtn.textContent = `✔True`;
falseBtn.textContent = `❌False`;
contBtn.textContent = `CONTINUE`;

btnDiv.appendChild(trueBtn);
btnDiv.appendChild(falseBtn);
contBtnDiv.appendChild(contBtn);



// create result store
let quizResult = [];

// function to record result for each question
const recordResult = () => {
    answerObj = {};
    
}

// index of current question
let questionNum = 1;

// Fill quiz page content
function populateQuiz (obj) {
    const results = obj.results;

    questionTitleParagraph.textContent = `${questionNum} of ${results.length} (${results[questionNum-1].category})`;
    questionParagraph.textContent = results[questionNum-1].question;
    
    
    questionDiv.appendChild(questionTitleParagraph)
    questionDiv.appendChild(questionParagraph)
    quizDiv.appendChild(questionDiv);
    quizDiv.appendChild(btnDiv);
    quizDiv.appendChild(contBtnDiv);
    
    
    textDiv.style.display = `none`;
    figure.classList.add(`no-display`);
    contentSpace.appendChild(quizDiv);
    
    // click  events for true and false buttons
    trueBtn.addEventListener(`click`, isClicked);
    falseBtn.addEventListener(`click`, isClicked);
    trueBtn.addEventListener(`click`, () => {
        trueBtn.classList.add(`true-picked`);
        falseBtn.classList.remove(`false-picked`);
    });
    falseBtn.addEventListener(`click`, () => {
        falseBtn.classList.add(`false-picked`);
        trueBtn.classList.remove(`true-picked`);
    });

        
    contBtnDiv.addEventListener(`click`, (()=>{
        trueBtn.classList.remove(`true-picked`);
        falseBtn.classList.remove(`false-picked`);
        if (questionNum<results.length) {
            if (btnClicked === true) {
                questionNum++;
                questionTitleParagraph.textContent = `${questionNum} of ${results.length} (${results[questionNum-1].category})`;
                questionParagraph.textContent = results[questionNum-1].question;
                
                btnClicked = false;
                console.log(questionNum);
                console.log(questionTitleParagraph);
                console.log(questionParagraph);
                if (questionNum===results.length) {
                    contBtn.textContent = `↑ SUBMIT`;
    
                    contBtnDiv.addEventListener(`click`, () => {
    
                    })
                }
            }
                    
        }

        
    }))

    // continue button functionality
    
}



// let quizObj;
// var globalQuizObj;
//     const returnObj = obj => {
//         // var quizObj = obj;
//         globalQuizObj = obj;
//         // console.log(quizObj);
//         console.log(globalQuizObj);
//     };

    