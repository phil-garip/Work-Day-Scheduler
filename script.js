// DEPENDENCIES========================================

 //text block container
 var textBlockContainer = $("#text-block-container");
 var dateToday = moment().format("MMM Do, YYYY");
 $("#currentDay").text(dateToday);


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
// render text blocks
function renderTextBlocks() {
    //get saved items
    localStorage.getItem("data");
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

        
    
    }

    function clearLocalStorage() {
        if (today.hour === 24) {
            localStorage.clear();
        }
    }
    
    $(".saveBtn").on("click", saveData);
    function saveData () {
        for(i=0; i<hourBlocks.length; i++) {
        var dailyTasksArray = [];
        var userInput = {
            tasks: ($(this).siblings("textArea").val())
        }

        var dailyTasksString = JSON.stringify(dailyTasksArray);
        dailyTasks.push(userInput);
        window.localStorage.setItem("Data", dailyTasksString);
       }
    }

    clearLocalStorage();
    };
    
    



// initializations



renderTextBlocks();