// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future -- figure out moment, then use if else to color code 
// WHEN I click into a time block
// THEN I can enter an event - on click, enter text
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage - use font awesome icon, save to local storage
// WHEN I refresh the page
// // THEN the saved events persist - local storage persists, check the form assignment

$(document).ready(function() {

var currentDay = document.querySelector("#current-day");

// Adds save button to page 
$(".saveBtn").html("<i></i>").addClass("far fa-save");

// Current date on top of page
function renderDate() {
    currentDay = moment().format("MMMM Do, YYYY");
    $("#current-day").text(currentDay);
}

renderDate()

// Change color based on time
var currentTime = moment().format("HH");
$(".hour").addClass(".present");
for (var i = 8; i < 17 ; i++) {
    if (currentTime < 1) {
        $(".hour").addClass(".future");
    } else if (currentTime > 1) {
        $(".hour").addClass(".past");
       
    }
}

// Saves events to local storage on click 

function saveButton() {
   
    $(".event-input").each(function() {
    var events = $(this).attr("id");
    $(this).val(localStorage.getItem(events));
    });

    $(".saveBtn").on("click", function() {
        var data = $(this).siblings(".event-input").val();
        var dataId = $(this).siblings(".event-input").attr("id");

        localStorage.setItem(dataId, data);
       
    })
}

saveButton()


// function determineHour() {
//     if (timeBlocks = )
// }

})




