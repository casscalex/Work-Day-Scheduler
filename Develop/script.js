// Display Current Day
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// Status Color Function
function taskStatus() {
    var taskTime = moment().hours();

    $(".time-block").each(function() {
        var currentTime = parseInt($(this).attr("id"));

        if (currentTime === taskTime) {
            $(this).addClass("present");
        } else if (currentTime > taskTime) {
            $(this).addClass("future");
        } else {
            $(this).addClass("past");
        }
    })
};

taskStatus();

// Save data in local storage
saveBtn.on("click", function() {
    var time = $(this).siblings(".taskTime").text();
    var plan = $(this).siblings(".plan").val();
    localStorage.setItem(time, plan);
});

