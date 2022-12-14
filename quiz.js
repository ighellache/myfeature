var images = {
    "owl"  : "owl.jpg",
    "bantam" : "bantam.jpg",
    "coati" : "coati.jpg",
    "kookaburra"   : "kookaburra.jpg",
    "pheasant"   : "pheasant.jpg",
    "ibis"   : "ibis.jpg",
    "egret"   : "egret.jpg",
    "wallaby" : "wallaby.jpg"
    }

document.getElementById("question").style.fontFamily = "Aclonica";
document.getElementById('question').style.fontSize = '25px';

function populate() {
    if (quiz.isEnded()) {
    showScores();
    } else {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show options
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
    var element = document.getElementById("choice" + i);
    element.innerHTML = images[choices[i]]? '<img src="'+images[choices[i]]+'"/>':choices[i];
    guess("btn" + i, choices[i]);
    }

    showProgress();
    }
    };

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
    quiz.guess(guess);
    populate();
    }
    };

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    if (currentQuestionNumber == 1){
        element.innerHTML = '<h3 class="bottomtext">Play for a sound clue!</h3>' + '<audio controls play class="mysound"><source src="Sounds/owl.mp3"></audio>' + "<br>" + "<br>" + "Question " + currentQuestionNumber + " of " + quiz.questions.length;
    }
    else if (currentQuestionNumber == 2){
        element.innerHTML = '<h3 class="bottomtext">Play for a sound clue!</h3>' + '<audio controls play class="mysound"><source src="Sounds/bantam.mp3"></audio>' + "<br>" + "<br>" + "Question " + currentQuestionNumber + " of " + quiz.questions.length;
    }
    else if (currentQuestionNumber == 3){
        element.innerHTML = '<h3 class="bottomtext">Play for a sound clue!</h3>' + '<audio controls play class="mysound"><source src="Sounds/coati.mp3"></audio>' + "<br>" + "<br>" + "Question " + currentQuestionNumber + " of " + quiz.questions.length;
    }
    else if (currentQuestionNumber == 4){
         element.innerHTML = '<h3 class="bottomtext">Play for a sound clue!</h3>' + '<audio controls play class="mysound"><source src="Sounds/kookaburra.mp3"></audio>' + "<br>" + "<br>" + "Question " + currentQuestionNumber + " of " + quiz.questions.length;
     }
    else if (currentQuestionNumber == 5){
        element.innerHTML = '<h3 class="bottomtext">Play for a sound clue!</h3>' + '<audio controls play class="mysound"><source src="Sounds/pheasant.mp3"></audio>' + "<br>" + "<br>" + "Question " + currentQuestionNumber + " of " + quiz.questions.length;
     }
    else if (currentQuestionNumber == 6){
        element.innerHTML = '<h3 class="bottomtext">Play for a sound clue!</h3>' + '<audio controls play class="mysound"><source src="Sounds/ibis.mp3"></audio>' + "<br>" + "<br>" + "Question " + currentQuestionNumber + " of " + quiz.questions.length;
    }
    else if (currentQuestionNumber == 7){
        element.innerHTML = '<h3 class="bottomtext">Play for a sound clue!</h3>' + '<audio controls play class="mysound"><source src="Sounds/wallaby.mp3"></audio>'+ "<br>" + "<br>" + "Question " + currentQuestionNumber + " of " + quiz.questions.length;
    }
    };

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
         gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
        element.innerHTML = gameOverHTML;
    if (quiz.score <= 3){
        element.innerHTML = "<h1>Result</h1>" + "<h2 id='score'> Your scores: " + quiz.score + "</h2>" + '<iframe src="https://giphy.com/embed/dDhTr3D2Cwg5G" width="400" height="450" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/gifs/chicken-pants-dDhTr3D2Cwg5G"></a>' + '<audio controls autoplay hidden class="mysound"><source src="Sounds/low.mp3"></audio>' + " You should visit the zoo to learn more!   " + '<button class="mybtn"><a href="https://ighellache.github.io/myfeature/">Play again</a></button>';
    }
    else if (quiz.score <= 5){
        element.innerHTML = "<h1>Result</h1>" + "<h2 id='score'> Your scores: " + quiz.score + "</h2>" + '<iframe src="https://giphy.com/embed/kewCD3ucGAwak" width="400" height="450" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/gifs/great-horned-owl-kewCD3ucGAwak"></a>' + '<audio controls autoplay hidden class="mysound"><source src="Sounds/med.mp3"></audio>' + " That was pretty impressive...  "  + '<button class="mybtn"><a href="https://ighellache.github.io/myfeature/">Play again</a></button>';
    }
    else if (quiz.score == 7){
        element.innerHTML = "<h1>Result</h1>" + "<h2 id='score'> Your scores: " + quiz.score + "</h2>" + '<iframe src="https://giphy.com/embed/SYQpUZhABtgaIaUr60" width="400" height="450"  frameBorder="0" class="giphy-embed" allowFullScreen></iframe><a href="https://giphy.com/gifs/pbsnature-SYQpUZhABtgaIaUr60"></a>' + '<audio controls autoplay hidden class="mysound"><source src="Sounds/victory.mp3"></audio>' + " Wow! You got them all!   " + '<button class="mybtn"><a href="https://ighellache.github.io/myfeature/">Play again</a></button>';
    }
    };


    // create questions
    var questions = [
    new Question("Which is the Eurasian eagle-owl?", ["coati", "bantam", "owl", "kookaburra"], "owl"),
    new Question("Which is the Bantam?", ["ibis", "bantam", "egret", "pheasant"], "bantam"),
    new Question("Can you guess which is the coati?", ["coati", "ibis", "kookaburra",  "egret"], "coati"),
    new Question("Find the kookaburra", ["owl", "pheasant", "coati", "kookaburra"], "kookaburra"),
    new Question("Which is the Lady Amhurst's Pheasant?", ["kookaburra", "pheasant", "bantam", "egret"], "pheasant"),
    new Question("Find the Ibis", ["egret", "ibis", "kookaburra", "coati"], "ibis"),
    new Question("Which is a wallaby?", ["kookaburra", "coati", "egret", "wallaby"], "wallaby")
    ];

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    }

    Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
    }

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
    }


    Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex] 
}


    Quiz.prototype.guess = function(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
    this.score++;
    }

    this.questionIndex++;
    }


    Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
    }

    // create quiz
    var quiz = new Quiz(questions);

    // display quiz
    populate();

    
