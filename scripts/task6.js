/* IF/ELSE IF */
//Step 1: Declare and initialize a new variable to hold the current date
const today = new Date();

// Step 2: Declare another variable to hold the day of the week
let dayOfWeek;

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
dayOfWeek = today.getDay();

// Step 4: Declare a variable to hold a message that will be displayed
let message1;

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (dayOfWeek >=0){
    message1= "Church | Time and Location vary";
}
if (dayOfWeek >=1){
    message1= "FHE | Time and Location vary";
}
if (dayOfWeek >=2) {
    message1 = "Devotional | 11:15 a.m. | BYU-Idaho Center";
}
if (dayOfWeek >=3){
    message1 ="Continue to have a good day!";
}
if (dayOfWeek >=4){
    message1 ="Continue to have a good day!";
}
if (dayOfWeek >=5){
    message1 ="Continue to have a good day!";
}
if (dayOfWeek >=6){
    message1 ="Continue to have a good day!";
}


/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message2;

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayOfWeek) {
    case 0:
        message2 = 'Sunday';
        break;
    case 1:
        message2 = 'Monday';
        break;
    case 2:
        message2 = 'Tuesday';
        break;
    case 3:
        message2 = 'Wednesday';
        break;
    case 4:
        message2 = 'Thursday';
        break;
    case 5:
        message2 = 'Friday';
        break;
    case 6:
        message2 = 'Saturday';
        break;
    default:
        message2 = 'Unknown - ' + dayOfWeek;
        break;
}

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector('#message1').textContent = message1;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector('#message2').textContent = message2;



