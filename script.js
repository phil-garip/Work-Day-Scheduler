// DEPENDENCIES========================================
    // current day p tag
var currentDayEl = $('#currentDay');
    // time-block div tag
var timeBlockEl = $('#time-block');
    // save button
var saveBtn = $('#save-button');
    // hour block
var hour = $('#time');
    // text area value
    // value of text area
var task = $('#user-input').val();
// STARTING DATA=======================================
    // list of hours?
// FUNCTIONS===========================================
// if time of day matches an hour element, change it's class to present
// if a user writes a note, it is saved until the end of the day
function saveTasks() {
    localStorage.setItem("Daily Tasks", task);
}

saveBtn.on("click", saveTasks());

// USER INTERACTIONS===================================





// USER STORY
//when a user logs on
//they can add tasks and events to each hour of the workday
//and those tasks will be saved locally
//future rows will be green
//row that holds current hour will be red
//rows from hours past will turn gray
