// DEPENDENCIES========================================
 //text block container
 var textBlockContainer = $("#text-block-container");


// STARTING DATA=======================================
    // list of text-block objects
var today = moment();
var textBlocks = [
    {
        hour: "0900"
    },
    {
        hour: "1000"
    },
    {
        hour: "1100"
    },
    {
        hour: "1200"
    },
    {
        hour: "1300"
    },
    {
        hour: "1400"
    },
    {
        hour: "1500"
    },
    {
        hour: "1600"
    },
    {
        hour: "1700"
    }
];

// FUNCTIONS===========================================
// dynamically render text blocks
function renderTextBlocks() {
    //create timeblock div
    var timeBlock= $('<div class="time-block row" id="time-block">');
    var hourBlock = $('<div class="hour col-sm-1" id="hour">');
    var textArea = $('<textarea id="user-input" class="future col-sm-10" placeholder="Add Event">');
    var button = $('<button class="saveBtn col-sm-1" id="save-button">');
    
    //add components to timeBlock
    timeBlock.append(hourBlock, textArea, button);
    //add timeblock to page
    textBlockContainer.append(timeBlock);
}

renderTextBlocks();


// USER INTERACTIONS===================================





// USER STORY
//when a user logs on
//they can add tasks and events to each hour of the workday
//and those tasks will be saved locally
//future rows will be green
//row that holds current hour will be red
//rows from hours past will turn gray
