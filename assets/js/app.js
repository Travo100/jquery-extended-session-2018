// similar to the crystal game

// we will get a random number from 19-120

var randomNumber = getRandomIntInclusive(19, 120);
var wins = 0;
var losses = 0;
var total = 0;
var timer = 10;
var timerId;

$(".game-container").hide();

$("#start").on("click", function(){
    $("#random-number-text").text(randomNumber);
    $("#win-text").text(wins);
    $("#loss-text").text(losses);
    $("#total-text").text(total);
    
    timerId = setInterval(function() {
        timer--;
        $("#timer-text").text(timer);
        if(timer === 0) {
            timer = 10;
        }
    }, 1000); 
    
    
    // if the user get 4 buttons to choose from 
    // each with a a random number from 1-12
    for (var i = 0; i < 4; i++) {
        var btn = $("<button>");
        btn.addClass("crystal-btn");
        btn.attr("value", getRandomIntInclusive(1, 12));
        btn.text("Click me");
        $("#items").append(btn);
    }

    $(".start-container").hide();
    $(".game-container").show();
});

$(document).on("click", ".crystal-btn", function(){
    total += parseInt($(this).val());
    $("#total-text").text(total);
    console.log(total);
    // if the random number matches the value of the buttons 
    if(total === randomNumber) {
        // the user wins 
        alert("User won!");
        wins++;
        $("#win-text").text(wins);
        resetGame();
    } else if (total > randomNumber) {
        
        // if it does not 
        // the user loses :(
        alert("User lost!");
        losses++;
        $("#loss-text").text(losses);
        resetGame();
    }
});

function resetGame() {
    randomNumber = getRandomIntInclusive(19, 120);
    total = 0;
    timer = 10;
    $("#random-number-text").text(randomNumber);
    $("#total-text").text(total);
    $("#items").empty();
    for (var i = 0; i < 4; i++) {
        var btn = $("<button>");
        btn.addClass("crystal-btn");
        btn.attr("value", getRandomIntInclusive(1, 12));
        btn.text("Click me");
        $("#items").append(btn);
    }
    console.log("Previous timerId", timerId);
    clearInterval(timerId);
    timerId = setInterval(function() {
        timer--;
        $("#timer-text").text(timer);
        if(timer === 0) {
            alert("times up!");
            timer = 10;
        }
    }, 1000); 
    console.log("New timerId", timerId);

}

function getRandomIntInclusive(min, max) {
    //The maximum is inclusive and the minimum is inclusive 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
