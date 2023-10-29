$(document).ready(function() {
    $("#quiz-form").submit(function(event) {
        event.preventDefault();
        var $answer = $("#quiz-answer"); 
        var answer = $answer.val();
        console.log(answer);
        if (answer === "Joe Biden") {
            $("#result").text("Yay! You answered correctly!").css("color", "green");
        } else {
            $("#result").text("Sorry, try again.").css("color", "red");
        }
        $answer.prop('disabled', true);
        $('option').not(':selected').attr('disabled', true);
    });
});
