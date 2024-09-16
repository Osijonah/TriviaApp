function changeContent (page) {
    let contentSpace =  document.querySelector(`main`);
    switch (page) {
        case `home`:
            contentSpace.innerHTML = `        <figure>
            <img src="quiz.svg" alt="Quiz SVG">
        </figure>
        <div class="text">
            <p class="header-size">Welcome to the Trivia Challenge</p>
            <p>You will be presented with 10 True or False questions</p>
            <p>Can you score 100%?</p>
            <div>
                <a href="#" onclick="changeContent('quiz')" class="btn">BEGIN</a>
            </div>
        </div>`;
            break;
        case `quiz`:
            contentSpace.innerHTML = `<div class="text question-text"><div>
            <p class="question-title">question-title</p>
            <p class="question">question</p>
        </div>
        <div class="answer-btns">
            <div class="true-btn">✔True</div>
            <div class="false-btn">❌False</div>
        </div>
        <div>
            <a href="#" onclick="changeContent('result')" class="btn">CONTINUE</a> 
        </div></div>`;
        break;
        case `result`:
            contentSpace.innerHTML = `<div class="text"><div class="score-div">
            <p class="score-p">You Scored </p>
        </div>
        <div class="result">
            <div>
                <p>Question</p>
                <p>Answer</p>
            </div>
            <div></div>
        </div>
        <div>
            <a href="#" onclick="changeContent('home')" class="btn">TRY AGAIN</a> 
        </div></div>`
        default:
            break;
    }
}