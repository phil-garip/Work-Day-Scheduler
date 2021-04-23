// DEPENDENCIES========================================

//const moment = require("moment");

 //text block container
 var textBlockContainer = $("#text-block-container");


// STARTING DATA=======================================
    // list of text-block objects
var today = moment();
var hourBlocks = [
    { 
        hour: 09
    },
    {
        hour: 10
    },
    {
        hour: 11
    },
    {
        hour: 12
    },
    {
        hour: 13
    },
    {
        hour: 14
    },
    {
        hour: 15
    },
    {
        hour: 16
    },
    {
        hour: 17
    }
];

// FUNCTIONS===========================================
// dynamically render text blocks
function renderTextBlocks() {
    // loop through objects
    for(i=0; i<hourBlocks.length; i++) {
        //translate time using moment
        var currentHour = hourBlocks[i].hour
        var dayTime = moment(hourBlocks[i].hour, "HH").format("h A");

        // create elements
        var hourBlock = $('<div class="hour col-sm-1" id="hour">').text(dayTime);
        var timeBlock= $('<div class="time-block row" id="time-block">');
        var textArea = $('<textarea id="user-input" class="future col-sm-10" placeholder="Add Event">');
        var button = $('<button class="saveBtn col-sm-1" id="save-button">').text("save");

        //append elements to each other and then to the page
        timeBlock.append(hourBlock, textArea, button);
        textBlockContainer.append(timeBlock);

        // change color of text area based on time using moment
        if (today.hour() === currentHour) {
            textArea.attr("class", "present col-sm-10");
        } else if (today.hour() > currentHour) {
            textArea.attr("class", "past col-sm-10");
        } else {
            textArea.attr("class", "future col-sm-10");
        }

        console.log(hourBlocks[5].hour);
        

        
    }

    
    //create timeblock div
    // var hourBlock = $('<div class="hour col-sm-1" id="hour">');
    // var timeBlock= $('<div class="time-block row" id="time-block">');
    // var textArea = $('<textarea id="user-input" class="future col-sm-10" placeholder="Add Event">');
    // var button = $('<button class="saveBtn col-sm-1" id="save-button">');
    
    

    //add components to timeBlock
    // timeBlock.append(textArea, button. hourBlock);

    // //add timeblock to page
    // textBlockContainer.append(timeBlock);
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
