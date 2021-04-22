// DEPENDENCIES========================================
 // textarea
 var userInput = $("textarea");
 // hour block
 var hourSlot = $("hour");
 // save button
 var saveBtn = $("save-button");


// STARTING DATA=======================================
    // list of text-block objects
var today = moment();
var textBlocks = [
    {
        hour: "0900",
        
    }
];

// FUNCTIONS===========================================
// if time of day matches an hour element, change it's class to present
// if a user writes a note, it is saved until the end of the day



// USER INTERACTIONS===================================





// USER STORY
//when a user logs on
//they can add tasks and events to each hour of the workday
//and those tasks will be saved locally
//future rows will be green
//row that holds current hour will be red
//rows from hours past will turn gray
