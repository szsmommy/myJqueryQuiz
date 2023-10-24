$("#quiz-form").on("submit", function(event) {
    event.preventDefault();
    var $answer = $("#quiz-answer"); 
    var answer = $answer.val();
    console.log(answer);
    if (answer = "Joe Biden"){
        $("#result").text("Yay! You answered correctly!");
    } else {
        $("#result").text("Sorry, try again.")
        $else("p").css("border", "5px solid red");
    }
});