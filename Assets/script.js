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


function renderBg() {

$("#" + currentTime).addClass("present");
for (var i = 7; i < 18; i++) {
    if (currentTime < i) {
        $("#" + i).addClass("future");
    } else if (currentTime > i) {
        $("#" + i).addClass("past");
       
    }
}
}
renderBg()

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


})




