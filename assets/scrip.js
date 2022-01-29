//global var current date, hour, day
var currentDay = moment().format("dddd, MMMM do YYYY, h:mm a");
var currentHour = +moment().format("HH");
var $currentDay = $("#currentDay");
var $timeBlock = $(".time-block");

//start at current time
$currentDay.text(currentDay);


//time block for business hrs 9-17
for (let i = 9; i <= 17; i++) {
    $timeBlock.append(createTimeBlocks(i));
  }


function createTimeBlocks(time) {
  var backgroundColor;

  if (time < currentHour) {
    backgroundColor = ".past";
  } else if (time === currentHour) {
    backgroundColor = ".present";
  } else {
    backgroundColor = ".future";
  }

  var timeBlock = $("<div>")
    .addClass("time-block row ")
    .attr("id", "hour-" + time);

  var $time = $("div").addClass("col-1 hour").text(formatTime(time));

  var $textArea = $("<textarea>")
    .addClass("col-10 description" + backgroundColor)
    .attr("id", "text-area-" + time);

  //create button
  $button = $("<button>")
    .addClass("col-1 saveBtn")
    .append($("<li>").addClass("fas fa-save"))
    .attr("id", "save-button-" + time);

  return timeBlock.append($time, $textArea, $button);

  function formatTime(time) {
    if (time > 12) {
      return time - 12 + "PM";
    } else {
      return time + "AM";
    }
  }
}

// save buttons
var $button9 = document.querySelector("#save-button-9");
var $textArea9 = document.querySelector("#text-area-9");

var $button10 = document.querySelector("#save-button-10");
var $textArea10 = document.querySelector("#text-area-10");

var $button11 = document.querySelector("#save-button-11");
var $textArea11 = document.querySelector("#text-area-11");

var $button12 = document.querySelector("#save-button-12");
var $textArea12 = document.querySelector("#text-area-12");

var $button13 = document.querySelector("#save-button-13");
var $textArea13 = document.querySelector("#text-area-13");

var $button14 = document.querySelector("#save-button-14");
var $textArea14 = document.querySelector("#text-area-14");

var $button15 = document.querySelector("#save-button-15");
var $textArea15 = document.querySelector("#text-area-15");

var $button16 = document.querySelector("#save-button-16");
var $textArea16 = document.querySelector("#text-area-16");

var $button17 = document.querySelector("#save-button-17");
var $textArea17 = document.querySelector("#text-area-17");

//save with click buttons 9-17 hrs
$button9.addEventListener("click", function (event) {
    event.preventDefault();
  
    var userText = $textArea9.value;
  
    localStorage.setItem("User Text 9 AM", userText);
  });



$button10.addEventListener("click", function (event) {
    event.preventDefault();
  
    var userText = $textArea10.value;
  
    localStorage.setItem("User Text 10 AM", userText);
  });



  $button11.addEventListener("click", function (event) {
    event.preventDefault();
  
    var userText = $textArea11.value;
  
    localStorage.setItem("User Text 11 AM", userText);
  });



$button12.addEventListener("click", function (event) {
    event.preventDefault();
  
    var userText = $textArea12.value;
  
    localStorage.setItem("User Text 12 PM", userText);
  });
  


$button13.addEventListener("click", function (event) {
    event.preventDefault();
  
    var userText = $textArea13.value;
  
    localStorage.setItem("User Text 1 PM", userText);
  });
  


$button14.addEventListener("click", function (event) {
    event.preventDefault();
  
    var userText = $textArea14.value;
  
    localStorage.setItem("User Text 2 PM", userText);
  });
  


$button15.addEventListener("click", function (event) {
    event.preventDefault();
  
    var userText = $textArea15.value;
  
    localStorage.setItem("User Text 3 PM", userText);
  });
  


$button16.addEventListener("click", function (event) {
    event.preventDefault();
  
    var userText = $textArea16.value;
  
    localStorage.setItem("User Text 4 PM", userText);
  });
  


$button17.addEventListener("click", function (event) {
    event.preventDefault();
  
    var userText = $textArea17.value;
  
    localStorage.setItem("User Text 5 PM", userText);
  });


//text functions

function renderUserText9(){
    var content = localStorage.getItem("User Text 9 AM");
    $textArea9.textContent = content;
}

function renderUserText10(){
    var content = localStorage.getItem("User Text 10 AM");
    $textArea10.textContent = content;
}

function renderUserText11(){
    var content = localStorage.getItem("User Text 11 AM");
    $textArea11.textContent = content;
}

function renderUserText12(){
    var content = localStorage.getItem("User Text 12 PM");
    $textArea12.textContent = content;
}

function renderUserText13(){
    var content = localStorage.getItem("User Text 1 PM");
    $textArea13.textContent = content;
}
function renderUserText14(){
    var content = localStorage.getItem("User Text 2 PM");
    $textArea14.textContent = content;
}

function renderUserText15(){
    var content = localStorage.getItem("User Text 3 PM");
    $textArea15.textContent = content;
}

// call functions
renderUserText9();
renderUserText10();
renderUserText11();
renderUserText12();
renderUserText13();
renderUserText14();
renderUserText15();
renderUserText16();
renderUserText17();