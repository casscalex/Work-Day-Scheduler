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
var saveBtn = $(".saveBtn");

saveBtn.on("click", function() {
    var time = $(this).siblings(".taskTime").text();
    var plan = $(this).siblings(".plan").val();
    localStorage.setItem(time, plan);
});

// When page is refreshed saved events persist
// when I use this function it break, not sure why?
// function saveSchedule() {

//     $(.taskTime).each(function() {
//         var saveTime = $(this).text();
//         var savePlan = localStorage.getItem(saveTime);

//         if (saveTime !== null) {
//             $(this).siblings(".plan").val(savePlan);
//         }
//     })
// };

// saveSchedule();
