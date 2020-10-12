

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar -- FIGURE OUT MOMENT
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future -- figure out moment, then use if else to color code 
// WHEN I click into a time block
// THEN I can enter an event - on click, entre text
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage - use font awesome icon, save to local storage
// WHEN I refresh the page
// // THEN the saved events persist - local storage persists, check the form assignment

$(document).ready(function() {
var currentDay = document.querySelector("#current-day");
var m = moment();
var timeBlocks = moment().hours();

function renderDate() {
currentDay = moment().format("MMM Do YY");
$("#current-day").text(currentDay);
}
renderDate()

// Need to align these to the right and put each on a new line/in their on little box
$(".time-block").children().css("background", "lightgray");
$(".time-block").children().html("<i></i>").addClass("far fa-save");
})