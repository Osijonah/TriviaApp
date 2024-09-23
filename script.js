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



// homepage content
const header = document.querySelector(`header`);
const contentSpace =  document.querySelector(`main`);
const textDiv = document.querySelector(`.text`);
const figure  = document.querySelector(`figure`);

document.querySelector(`.begin-btn`).addEventListener(`click`, startQuiz);


// Quiz Page Content

const quizDiv = document.createElement(`div`);
const questionDiv = document.createElement(`div`);
const questionTitleParagraph = document.createElement(`p`);
const questionParagraph = document.createElement(`p`);
const btnDiv = document.createElement(`div`);
const trueBtn = document.createElement(`div`);
const falseBtn = document.createElement(`div`);
const contBtnDiv = document.createElement(`div`);
const contBtn = document.createElement(`a`);

const questionTitle = document.querySelector(`.question-title`);
const question = document.querySelector(`.question`);


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



// result page content

const quizResultDiv = document.createElement(`div`);
quizResultDiv.classList.add(`flex-col`);
const scorePara = document.createElement(`p`);
scorePara.classList.add(`text`);

// create result store
let quizResult = [];

// create score store
let quizScore = 0;

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


    // function to determine option clicked

    const optionClicked = () => {
        if ( trueBtn.classList.contains(`true-picked`)) {
            return `true`;
        }
        if ( falseBtn.classList.contains(`false-picked`)) {
            return `false`;
        }
    }
    
    
    // function to record result for each question
    
    const recordResult = (obj) => {
        obj.question = results[questionNum-1].question;
        obj.option = optionClicked();
        
        quizResult.push(obj);
        
    }   
    
    
    // continue button functionality
    
    contBtnDiv.addEventListener(`click`, (()=>{
        if ( btnClicked === true) {
            recordResult({});
        }
        trueBtn.classList.remove(`true-picked`);
        falseBtn.classList.remove(`false-picked`);
        if (questionNum<results.length) {
            if (btnClicked === true) {
                questionNum++;
                questionTitleParagraph.textContent = `${questionNum} of ${results.length} (${results[questionNum-1].category})`;
                questionParagraph.textContent = results[questionNum-1].question;
                
                btnClicked = false;
                if (questionNum===results.length) {
                    contBtn.textContent = `↑ SUBMIT`;
    
                    contBtnDiv.addEventListener(`click`, () => {

                        // header.classList.add(`position-fixed`);quz

                        quizDiv.classList.add(`no-display`);
                        let questionNum = 0;
                        quizResult.forEach((obj) => {
                            const eachResultDiv = document.createElement(`div`);
                            const questionPara = document.createElement(`p`);
                            const optionPara = document.createElement(`p`);

                            questionPara.textContent = obj.question;
                            optionPara.textContent = `Your Answer: ${obj.option}`

                            if ( obj.option === results[questionNum].correct_answer.toLowerCase() ) {
                                optionPara.textContent += ` ✔`;
                                eachResultDiv.classList.add(`correct-ans`);

                                quizScore++;
                            }
                            else if ( obj.option !== results[questionNum].correct_answer.toLowerCase() ) {
                                optionPara.textContent = optionPara.textContent += ` ❌`;
                                eachResultDiv.classList.add(`false-ans`);
                            }
                            
                            eachResultDiv.appendChild(questionPara);
                            eachResultDiv.appendChild(optionPara);

                            quizResultDiv.appendChild(eachResultDiv)

                            questionNum++;
                        })

                        if (quizScore > 8) {
                            scorePara.textContent = `You scored ${quizScore}/10 🎉`;
                        }else if (quizScore < 8 && quizScore > 4) {
                            scorePara.textContent = `You scored ${quizScore}/10 🦾`
                        }else if (quizScore < 5) {
                            scorePara.textContent = `You scored ${quizScore}/10 😑`
                        }
                        
                        contentSpace.appendChild(scorePara);
                        contentSpace.appendChild(quizResultDiv);

                    })
                }
            }
                    
        }

        
    }))

}

    