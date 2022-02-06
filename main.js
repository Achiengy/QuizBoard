// USER-INTERFACE LOGIC
function check(){
    
    var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
	var correct = 0;


	if (question1 == "B") {
		correct++;
}
	if (question2 == "B") {
		correct++;
}	
	if (question3 == "C") {
		correct++;
	}

    if (question4 == "C") {
		correct++;
	}

    if (question5 == "A") {
		correct++;
	}

	
	var pictures = ["/Images/results.jpg", "/Images/results.jpg", "/Images/results.jpg",];
	var messages = ["EXCELLENT!", "FAIR!", "POOR! RETAKE TEST"];
	var score;

	if (correct <= 2) {
		score = 2;
	}

	if (correct == 3) {
		score = 1;
	}

	if (correct >= 4) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}

    // BUSINESS LOGIC
	
