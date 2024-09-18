async function startQuiz() {
    const requestURL =
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const quizQuestions = await response.json();
  
    populateQuiz(quizQuestions)
}



const questionTitle = document.querySelector(`.question-title`);
const question = document.querySelector(`.question`);



const contentSpace =  document.querySelector(`main`);
const textDiv = document.querySelector(`.text`);
const figure  = document.querySelector(`figure`);

document.querySelector(`.begin-btn`).addEventListener(`click`, startQuiz);

  function populateQuiz (obj) {
    console.log(obj);
        const quizDiv = document.createElement(`div`);
        const questionDiv = document.createElement(`div`);
        const questionTitleParagraph = document.createElement(`p`);
        const questionParagraph = document.createElement(`p`);
        const btnDiv = document.createElement(`div`);
        const trueBtn = document.createElement(`div`);
        const falseBtn = document.createElement(`div`);
        const contBtnDiv = document.createElement(`div`);
        const contBtn = document.createElement(`a`);
        
        
        
        quizDiv.classList.add(`text`, `question-text`);
        questionTitleParagraph.classList.add(`question-title`);
        questionParagraph.classList.add(`question`);
        btnDiv.classList.add(`answer-btns`);
        trueBtn.classList.add(`true-btn`);
        falseBtn.classList.add(`false-btn`);
        contBtn.classList.add(`btn`);

        questionTitleParagraph.textContent = obj.results[0].category;
        questionParagraph.textContent = obj.results[0].question;
        
        trueBtn.textContent = `✔True`;
        falseBtn.textContent = `❌False`;
        contBtn.textContent = `CONTINUE`;
        
        
        questionDiv.appendChild(questionTitleParagraph)
        questionDiv.appendChild(questionParagraph)
        btnDiv.appendChild(trueBtn);
        btnDiv.appendChild(falseBtn);
        contBtnDiv.appendChild(contBtn);
        quizDiv.appendChild(questionDiv);
        quizDiv.appendChild(btnDiv);
        quizDiv.appendChild(contBtnDiv);

        textDiv.style.display = `none`;
        figure.classList.add(`no-display`);
        contentSpace.appendChild(quizDiv);
        


        // <p class="question-title">1 of 10 (${questionTitle})</p>
    
      }
    
    // populateQuiz(quizQuestions);
    
// function changeContent (page) {
    
    
    
    // onclick="changeContent('quiz')"
//     switch (page) {
//              case `result`:
//             contentSpace.innerHTML = `<div class="text"><div class="score-div">
//             <p class="score-p">You Scored </p>
//         </div>
//         <div class="result">
//             <div>
//                 <p>Question</p>
//                 <p>Answer</p>
//             </div>
//             <div></div>
//         </div>
//         <div>
//             <a href="#" onclick="changeContent('home')" class="btn">TRY AGAIN</a> 
//         </div></div>`
//         default:
//             break;
//     }
// }