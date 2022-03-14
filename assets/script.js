// var hours = [{
//         hours: "9AM"
//     },
//     { hours: "10AM" },
//     { hours: "11AM" },
//     { hours: "12PM" },
//     { hours: "1PM" },
//     { hours: "2PM" },
//     { hours: "3PM" },
//     { hours: "4PM" },
//     { hours: "5PM" }
// ];



// var planner = function() {
//     //select parent container
//     var hourParentEl = document.querySelector(".container");
//     // create HTML for time blocks
//     var textContainerEl = document.createElement("textarea");
//     textContainerEl.classList = ".col-10";
//     var hourBlockEl = document.createElement("div");
//     hourBlockEl.classList = ".col-1 border-right border-top bg-light";
//     var saveButtonEl = document.createElement("button");
//     saveButtonEl.classList = ".btn savebtn col-1 bg-info rounded-right";
//     saveButtonEl.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';

//     // append to parent
//     hourParentEl.appendChild(hourBlockEl);
//     hourParentEl.appendChild(textContainerEl);
//     hourParentEl.appendChild(saveButtonEl);
// }

// planner();

// var dayDisplayEl = document.querySelector("#currentDay");
// dayDisplayEl.textContent = moment(day);

$(document).ready(function() {
    // display current day
    $("#currentDay").text(moment().format("MMM DD, YYYY LT"));
    // assign saveBtn click listener
    $(".saveBtn").on("click", function() {
            var text = $(this).siblings("#event-bg").val();
            var time = $(this).parent().attr("id");

            // set items to localStorage
            localStorage.setItem(time, text);
        })
        // load saved data for each hour created
    $("#hour9 #event-bg").val(localStorage.getItem("hour9"));
    $("#hour10 #event-bg").val(localStorage.getItem("hour10"));
    $("#hour11 #event-bg").val(localStorage.getItem("hour11"));
    $("#hour12 #event-bg").val(localStorage.getItem("hour12"));
    $("#hour13 #event-bg").val(localStorage.getItem("hour13"));
    $("#hour14 #event-bg").val(localStorage.getItem("hour14"));
    $("#hour15 #event-bg").val(localStorage.getItem("hour15"));
    $("#hour16 #event-bg").val(localStorage.getItem("hour16"));
    $("#hour17 #event-bg").val(localStorage.getItem("hour17"));

    function classChanger() {
        // current time
        var currentTime = moment().hour();

        //loop time-blocks
        $(".time-block").each(function() {
            var pastTime = parseInt($(this).attr("id").split("hour")[1]);
            console.log(pastTime);

            // if past current hour, grayed-out background
            if (pastTime < currentTime) {
                $(this).addClass("bg-secondary");
                $(this).removeClass("bg-danger");
                $(this).removeClass("bg-success");
            } else if (pastTime === currentTime) {
                $(this).addClass("bg-danger");
                $(this).removeClass("bg-secondary");
                $(this).removeClass("bg-success");
            } else {
                $(this).addClass("bg-success");
                $(this).removeClass("bg-secondary");
                $(this).removeClass("bg-danger");
            }
        })
    }
    classChanger();
})