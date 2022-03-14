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
            // parsing everything in the parent container with ".time-block" for an integer, selecting id's and splitting "hour" away from the numbers, selecting the second part of the selected id which is the number, (ie #hour12)
            var pastTime = parseInt($(this).attr("id").split("hour")[1]);

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