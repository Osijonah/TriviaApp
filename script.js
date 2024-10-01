async function startQuiz() {
    const requestURL =
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const quizQuestions = await response.json();
  
    populateQuiz(quizQuestions);
}

// function to check for true and false button clicks

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
const questionParagraph = document.createElement(`h5`);
const btnDiv = document.createElement(`div`);
const trueBtn = document.createElement(`div`);
const falseBtn = document.createElement(`div`);
const contBtnDiv = document.createElement(`div`);
const contBtn = document.createElement(`p`);
const contBtnIcon = document.createElement(`p`);
const subBtnIcon = document.createElement(`p`);
const hiddenPara = document.createElement(`p`);

// quizDiv.prepend(<img src="right-arrow.svg" alt="right-arrow" srcset=""/>);




hiddenPara.textContent = `Please, answer this question.`;

const questionTitle = document.querySelector(`.question-title`);
const question = document.querySelector(`.question`);


// Adding classes to quiz page element

quizDiv.classList.add(`text`, `question-text`);
questionTitleParagraph.classList.add(`question-title`);
questionParagraph.classList.add(`question`);
hiddenPara.classList.add(`hidden-para`, `no-display`);
btnDiv.classList.add(`answer-btns`);
trueBtn.classList.add(`true-btn`);
falseBtn.classList.add(`false-btn`);
contBtnDiv.classList.add(`btn`, `cont-btn-div`);



// for display of buttons on quiz page


trueBtn.innerHTML = `<svg class="checkmark" viewBox="0 -3 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#00973f" stroke="#00973f"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>checkmark</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-518.000000, -1039.000000)" fill="#00973f"> <path d="M548.783,1040.2 C547.188,1038.57 544.603,1038.57 543.008,1040.2 L528.569,1054.92 L524.96,1051.24 C523.365,1049.62 520.779,1049.62 519.185,1051.24 C517.59,1052.87 517.59,1055.51 519.185,1057.13 L525.682,1063.76 C527.277,1065.39 529.862,1065.39 531.457,1063.76 L548.783,1046.09 C550.378,1044.46 550.378,1041.82 548.783,1040.2" id="checkmark" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>`;

falseBtn.innerHTML = `<svg class="wrong" fill="#b71c1c" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"></path></g></svg>`;

trueBtn.append(` True`);
falseBtn.append(` False`);
contBtn.textContent = `CONTINUE`;

contBtnIcon.innerHTML = `<svg class="right-arrow" viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M13.11 29.113c7.243 0 13.113-5.871 13.113-13.113s-5.87-13.113-13.113-13.113c-7.242 0-13.113 5.871-13.113 13.113s5.871 13.113 13.113 13.113zM13.11 3.936c6.652 0 12.064 5.412 12.064 12.064s-5.412 12.064-12.064 12.064c-6.653 0-12.064-5.412-12.064-12.064s5.411-12.064 12.064-12.064z" fill="#ffffff"> </path> <path d="M13.906 21.637l0.742 0.742 6.378-6.379-6.378-6.379-0.742 0.742 5.112 5.112h-12.727v1.049h12.727z" fill="#ffffff"> </path> </g></svg>`;

subBtnIcon.innerHTML = `<svg height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#ffffffffffff;" d="M381.06,130.935l-108.598-108.6c-0.545-0.545-1.117-1.058-1.713-1.547 c-0.259-0.213-0.538-0.402-0.807-0.604c-0.34-0.254-0.673-0.517-1.021-0.751c-0.326-0.217-0.669-0.408-1.004-0.61 c-0.315-0.189-0.625-0.388-0.948-0.56c-0.343-0.183-0.698-0.34-1.052-0.507c-0.337-0.158-0.67-0.327-1.01-0.469 c-0.341-0.141-0.694-0.256-1.043-0.382c-0.369-0.133-0.735-0.275-1.109-0.388c-0.346-0.106-0.703-0.183-1.057-0.272 c-0.383-0.096-0.763-0.203-1.15-0.281c-0.41-0.082-0.83-0.132-1.246-0.191c-0.337-0.048-0.669-0.112-1.005-0.146 c-0.756-0.073-1.522-0.115-2.298-0.115c-0.776,0-1.542,0.042-2.299,0.116c-0.327,0.033-0.653,0.095-0.981,0.141 c-0.425,0.061-0.853,0.112-1.271,0.194c-0.375,0.074-0.745,0.18-1.117,0.273c-0.365,0.092-0.735,0.172-1.092,0.281 c-0.362,0.11-0.717,0.248-1.072,0.375c-0.36,0.129-0.726,0.248-1.075,0.394c-0.33,0.137-0.652,0.301-0.977,0.453 c-0.365,0.172-0.734,0.335-1.088,0.524c-0.306,0.163-0.602,0.355-0.901,0.534c-0.354,0.209-0.711,0.411-1.052,0.638 c-0.324,0.219-0.636,0.465-0.954,0.703c-0.292,0.217-0.591,0.422-0.874,0.652c-0.557,0.458-1.098,0.948-1.621,1.466 c-0.028,0.025-0.054,0.047-0.081,0.071L130.935,130.934c-9.087,9.089-9.089,23.824,0,32.912c9.087,9.089,23.824,9.087,32.912,0.002 l68.88-68.876v285.147c0,12.853,10.42,23.273,23.273,23.273c12.853,0,23.273-10.42,23.273-23.273V94.973l68.875,68.875 c4.544,4.544,10.501,6.817,16.455,6.817c5.956,0,11.913-2.273,16.457-6.817C390.149,154.759,390.149,140.023,381.06,130.935z"></path> <path style="fill:#ffffffffffffA9A8AE;" d="M488.727,248.242c-12.853,0-23.273,10.42-23.273,23.273v178.424H46.545V271.515 c0-12.853-10.42-23.273-23.273-23.273S0,258.662,0,271.515v201.697c0,12.853,10.42,23.273,23.273,23.273h465.455 c12.853,0,23.273-10.42,23.273-23.273V271.515C512,258.662,501.58,248.242,488.727,248.242z"></path> </g></svg>`;
btnDiv.appendChild(trueBtn);
btnDiv.appendChild(falseBtn);
contBtnDiv.appendChild(contBtn);
contBtnDiv.appendChild(contBtnIcon);



// result page content

const resultPageDiv = document.createElement(`div`);
const quizResultDiv = document.createElement(`div`);
const scorePara = document.createElement(`h5`);

quizResultDiv.classList.add(`flex-col`);
scorePara.classList.add(`text`,`score-para`);
resultPageDiv.classList.add(`result-page`);


// create result store
let quizResult = [];

// create score store
let quizScore = 0;

// index of current question
let questionNum = 1;

// function to remove special character

const pureString = ( str ) => {
    return str.replaceAll(`&quot;`, `"`).replaceAll(`&#039;`, `'`).replaceAll(`&rdquo;`, `"`).replaceAll(`&ldquo;`, `"`).replaceAll(` &amp;`, `:`);
}

// Fill quiz page content

function populateQuiz (obj) {
    const results = obj.results;

    questionTitleParagraph.textContent = `${questionNum} of ${results.length} (${pureString(results[questionNum-1].category)})`;

    questionParagraph.textContent = pureString(results[questionNum - 1].question);
    
    
    questionDiv.appendChild(questionTitleParagraph)
    questionDiv.appendChild(questionParagraph)
    quizDiv.appendChild(questionDiv);
    quizDiv.appendChild(btnDiv);
    quizDiv.appendChild(hiddenPara);
    quizDiv.appendChild(contBtnDiv);
    
    
    textDiv.classList.add(`no-display`);
    figure.classList.add(`no-display`);
    contentSpace.appendChild(quizDiv);

    
    // click  events for true and false buttons
    
    trueBtn.addEventListener(`click`, isClicked);
    falseBtn.addEventListener(`click`, isClicked);
    trueBtn.addEventListener(`click`, () => {
        trueBtn.classList.add(`true-picked`);
        falseBtn.classList.remove(`false-picked`);
        hiddenPara.classList.add(`no-display`);
    });
    falseBtn.addEventListener(`click`, () => {
        falseBtn.classList.add(`false-picked`);
        trueBtn.classList.remove(`true-picked`);
        hiddenPara.classList.add(`no-display`);
    });


    // function to determine option clicked

    const optionClicked = () => {
        if ( trueBtn.classList.contains(`true-picked`)) {
            return `True`;
        }
        if ( falseBtn.classList.contains(`false-picked`)) {
            return `False`;
        }
    }
    
    
    // function to record result for each question
    
    const recordResult = (obj) => {
        obj.question = pureString(results[questionNum - 1].question);
        obj.option = optionClicked();
        
        quizResult.push(obj);
        
    }   
    
    
    // continue button functionality
    
    contBtnDiv.addEventListener(`click`, (( e )=>{
        console.log(e.target);
        

        if ( btnClicked === true) {
            recordResult({});
            trueBtn.classList.remove(`true-picked`);
            falseBtn.classList.remove(`false-picked`);
            if (questionNum<results.length) {
                if (btnClicked === true) {
                    questionNum++;
                    questionTitleParagraph.textContent = `${questionNum} of ${results.length} (${pureString(results[questionNum-1].category)})`;
                    questionParagraph.textContent = pureString(results[questionNum - 1].question);
                    
                    btnClicked = false;
                    if (questionNum===results.length) {
                        contBtn.textContent = `SUBMIT `;

                        contBtnIcon.innerHTML = `<svg class="upload" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#ffffffffffff;" d="M381.06,130.935l-108.598-108.6c-0.545-0.545-1.117-1.058-1.713-1.547 c-0.259-0.213-0.538-0.402-0.807-0.604c-0.34-0.254-0.673-0.517-1.021-0.751c-0.326-0.217-0.669-0.408-1.004-0.61 c-0.315-0.189-0.625-0.388-0.948-0.56c-0.343-0.183-0.698-0.34-1.052-0.507c-0.337-0.158-0.67-0.327-1.01-0.469 c-0.341-0.141-0.694-0.256-1.043-0.382c-0.369-0.133-0.735-0.275-1.109-0.388c-0.346-0.106-0.703-0.183-1.057-0.272 c-0.383-0.096-0.763-0.203-1.15-0.281c-0.41-0.082-0.83-0.132-1.246-0.191c-0.337-0.048-0.669-0.112-1.005-0.146 c-0.756-0.073-1.522-0.115-2.298-0.115c-0.776,0-1.542,0.042-2.299,0.116c-0.327,0.033-0.653,0.095-0.981,0.141 c-0.425,0.061-0.853,0.112-1.271,0.194c-0.375,0.074-0.745,0.18-1.117,0.273c-0.365,0.092-0.735,0.172-1.092,0.281 c-0.362,0.11-0.717,0.248-1.072,0.375c-0.36,0.129-0.726,0.248-1.075,0.394c-0.33,0.137-0.652,0.301-0.977,0.453 c-0.365,0.172-0.734,0.335-1.088,0.524c-0.306,0.163-0.602,0.355-0.901,0.534c-0.354,0.209-0.711,0.411-1.052,0.638 c-0.324,0.219-0.636,0.465-0.954,0.703c-0.292,0.217-0.591,0.422-0.874,0.652c-0.557,0.458-1.098,0.948-1.621,1.466 c-0.028,0.025-0.054,0.047-0.081,0.071L130.935,130.934c-9.087,9.089-9.089,23.824,0,32.912c9.087,9.089,23.824,9.087,32.912,0.002 l68.88-68.876v285.147c0,12.853,10.42,23.273,23.273,23.273c12.853,0,23.273-10.42,23.273-23.273V94.973l68.875,68.875 c4.544,4.544,10.501,6.817,16.455,6.817c5.956,0,11.913-2.273,16.457-6.817C390.149,154.759,390.149,140.023,381.06,130.935z"></path> <path style="fill:#ffffffffffffA9A8AE;" d="M488.727,248.242c-12.853,0-23.273,10.42-23.273,23.273v178.424H46.545V271.515 c0-12.853-10.42-23.273-23.273-23.273S0,258.662,0,271.515v201.697c0,12.853,10.42,23.273,23.273,23.273h465.455 c12.853,0,23.273-10.42,23.273-23.273V271.515C512,258.662,501.58,248.242,488.727,248.242z"></path> </g></svg>`;
        
                        contBtnDiv.addEventListener(`click`, () => {
                            
                            console.log(`submit button clicked`);
                            
                            
                            if ( btnClicked === true ) {
                                
                                contentSpace.classList.remove(`main`);
                                quizDiv.classList.add(`no-display`);
                                let questionNum = 0;

                                // loop to fill the column of results and each div for each question
                                quizResult.forEach((obj) => {
                                    const eachResultDiv = document.createElement(`div`);
                                    const questionPara = document.createElement(`h6`);
                                    const optionPara = document.createElement(`div`);
                                    

                                    questionPara.classList.add(`question-para`);
                                    optionPara.classList.add(`option-para`);
                                    eachResultDiv.classList.add(`result-div`);
                                    questionPara.textContent = obj.question;
                                    optionPara.textContent = `Your Answer: ${obj.option} `
                                    
                                    console.log(`option: ${obj.option}; answer: ${results[questionNum].correct_answer}`);
                                    
                                    if ( obj.option === results[questionNum].correct_answer ) {
                                        optionPara.innerHTML += ` <svg class="checkmark" viewBox="0 -3 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#00973f" stroke="#00973f"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>checkmark</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-518.000000, -1039.000000)" fill="#00973f"> <path d="M548.783,1040.2 C547.188,1038.57 544.603,1038.57 543.008,1040.2 L528.569,1054.92 L524.96,1051.24 C523.365,1049.62 520.779,1049.62 519.185,1051.24 C517.59,1052.87 517.59,1055.51 519.185,1057.13 L525.682,1063.76 C527.277,1065.39 529.862,1065.39 531.457,1063.76 L548.783,1046.09 C550.378,1044.46 550.378,1041.82 548.783,1040.2" id="checkmark" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>`;
                                        eachResultDiv.classList.add(`correct-ans`);
        
                                        quizScore++;
                                    }
                                    else if ( obj.option !== results[questionNum].correct_answer ) {
                                        optionPara.innerHTML += ` <svg class="wrong" fill="#b71c1c" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"></path></g></svg>`;
                                        eachResultDiv.classList.add(`false-ans`);
                                    }
                                    
                                    eachResultDiv.appendChild(questionPara);
                                    eachResultDiv.appendChild(optionPara);
        
                                    quizResultDiv.appendChild(eachResultDiv);
        
                                    questionNum++;
                                })
        
                                if (quizScore > 8) {
                                    scorePara.textContent = `You Scored ${quizScore}/10 ${` `}            🎉`;
                                }else if (quizScore < 8 && quizScore > 4) {
                                    scorePara.textContent = `You Scored ${quizScore}/10 ${` `}            💪`;
                                }else if (quizScore < 5) {
                                    scorePara.textContent = `You Scored ${quizScore}/10 ${` `}            😑`;
                                }
                                
                                resultPageDiv.appendChild(scorePara);
                                resultPageDiv.appendChild(quizResultDiv);

                                contBtnDiv.classList.add(`try-again`);
                                contBtn.textContent = `TRY AGAIN `;
                                contBtnIcon.innerHTML = `<svg class="reload" viewBox="0 -3 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>replay</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-412.000000, -622.000000)" fill="#ffffff"> <path d="M443.67,633 L440.827,633 C439.862,626.772 434.488,622 427.984,622 C422.969,622 418.624,624.839 416.451,628.991 L418.315,629.736 C420.184,626.318 423.813,624 427.984,624 C433.381,624 437.862,627.881 438.805,633 L435.389,633 C435.079,633.301 434.783,633.486 435.227,634.007 L438.957,637.801 C439.267,638.101 439.768,638.101 440.076,637.801 L443.832,634.007 C444.141,633.706 443.979,633.301 443.67,633 L443.67,633 Z M427.984,646 C422.945,646 418.702,642.616 417.396,638 L420.647,638 C420.957,637.7 421.118,637.294 420.81,636.994 L417.054,633.199 C416.745,632.899 416.244,632.899 415.935,633.199 L412.204,636.994 C411.761,637.515 412.057,637.7 412.366,638 L415.347,638 C416.703,643.73 421.834,648 427.984,648 C432.664,648 436.754,645.524 439.047,641.82 L437.164,641.068 C435.193,644.039 431.819,646 427.984,646 L427.984,646 Z" id="replay" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>`; 
                                resultPageDiv.appendChild(contBtnDiv);

                                contentSpace.appendChild(resultPageDiv);
        
                            } else {
                                hiddenPara.classList.remove(`no-display`);
                            }
                        })
                    }
                }
                
            }
        } else {
            hiddenPara.classList.remove(`no-display`);
        }
        
        
    }))
    // if ( contBtnDiv.classList.contains(`try-again`) ) {
        
    //     contBtnDiv.addEventListener(`click`, ( e ) => {
    //         console.log(e.target);
            
    //         resultPageDiv.classList.add(`no-display`);
    //         textDiv.classList.remove(`no-display`);
    //         figure.classList.remove(`no-display`);
    //     // location.reload();
    // })
    // }
    
    // const beginBtn = document.querySelector(`.begin-btn`);
    // beginBtn.addEventListener(`click`, console.log(`clicked`)
    //  );
    
}

    