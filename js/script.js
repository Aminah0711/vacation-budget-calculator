var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

var tripInfo = function() {
    var totalBudget = Number(prompt("What is the total budget?"));
    var accommodation = Number(prompt("What are your accommodation costs?"));
    var numDays = Number(prompt("How many days will your trip last?"));
    
    
    calculateDailyBudget(totalBudget, accommodation, numDays);
};



var calculateDailyBudget = function(totalBudget, accommodation, numDays) {
    var daily = ((totalBudget - accommodation)/numDays).toFixed(2);
    dailyBudget.innerText = `Your can spend $${daily} on food and fun.`;
};

tripInfoButton.addEventListener("click",tripInfo);