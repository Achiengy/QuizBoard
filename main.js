// USER INTERFACE LOGIC
function submit(){
    var score = 0;
    var correctAnswer = document.quiz.question1.value;
    if (correctAnswer == "False")(score +=1)
    var correctAnswer1 = document.quiz.question1.value;
    var correctAnswer2 = document.quiz.question2.value;
    var correctAnswer3 = document.quiz.question3.value;
    var correctAnswer4 = document.quiz.question4.value;
    var correctAnswer5 = document.quiz.question5.value;
    if (correctAnswer1 == "False")(score +=1);
    if (correctAnswer2 == "Alert("Hello");")(score +=1);
    if (correctAnswer3 == "function = myfunction()")(score +=1);
    if (correctAnswer4 == "if (i==5)")(score +=1);
    if (correctAnswer5 == "var colors = ["red","green","blue"]")(score +=1);
    document.write(score);
}