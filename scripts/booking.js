/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costperDay = 35;
let numberDays = 0;
let totalCost = 0;
let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");

let clearButton = document.getElementById("clear-button");

let full = document.getElementById("full");
let half = document.getElementById("half");

let costDisplay = document.getElementById("calculated-cost"); 

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function dayClicked(dayElement) {
    if (dayElement.classList.contains("clicked")) {
        dayElement.classList.remove("clicked");
        numberDays--;
    } else {
        dayElement.classList.add("clicked");
        numberDays++;
    }
    calculate(numberDays, costperDay);
}
monday.addEventListener("click", function() {
    dayClicked(monday);
});

tuesday.addEventListener("click", function() {
    dayClicked(tuesday);
});

wednesday.addEventListener("click", function() {
    dayClicked(wednesday);
});

thursday.addEventListener("click", function() {
    dayClicked(thursday);
});

friday.addEventListener("click", function() {
    dayClicked(friday);
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clearDays() {
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
    saturday.classList.remove("clicked");
    sunday.classList.remove("clicked");
  }

clearButton.addEventListener("click", clearDays);

/********* change rate *********/
//when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


function fullClicked() {

    if (full.classList.contains("clicked"))
    {
        full.classList.remove("clicked");
        half.classList.add("clicked");
        costperDay = 20;
    }
    else if (!(full.classList.contains("clicked")))
    {
        half.classList.remove("clicked");
        full.classList.add("clicked");
        costperDay = 35;
    }
    calculate(numberDays, costperDay);
  }
  full.addEventListener("click", fullClicked);
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

half.addEventListener("click", halfClicked);

function halfClicked() {

    if (half.classList.contains("clicked"))
    {
        half.classList.remove("clicked");
        full.classList.add("clicked");
        costperDay = 35;
    }
    else if (!(half.classList.contains("clicked")))
    {half.classList.add("clicked");
        full.classList.remove("clicked");
        costperDay = 20;
    }
    calculate(numberDays, costperDay);
  }


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(days, cost){
    totalCost = days * cost;
    costDisplay.innerHTML = totalCost;
}
