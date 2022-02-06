// USER INTERFACE LOGIC
function onSubmit(){
    var score=0;
    var numOfQuestions = 5;
    var ansArr = ['B','B','C','C','A'];

    var question1 = document.forms['quiz']['question1'].value;
    var question2 = document.forms['quiz']['question2'].value;
    var question3 = document.forms['quiz']['question3'].value;
    var question4 = document.forms['quiz']['question4'].value;
    var question5 = document.forms['quiz']['question5'].value;

     for(var i = 1; i <= numOfQuestions; i++){
         if(eval('quesion' + i) == ''){
             alert("You missed question number " + i);
        }

        for(var i =1; i <= numOfQuestions)
     }
}