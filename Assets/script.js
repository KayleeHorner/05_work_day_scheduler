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
var currentTime = moment().hours();
var textBlock = $(".event-input");

function renderBg() {
$(textBlock).addClass(".present");
    if (currentTime > ".hour") {
        $(textBlock).addClass(".future");
    } else if (currentTime < ".hour") {
        $(textBlock).addClass(".past");
       
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




