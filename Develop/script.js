

// $(function () {});
  
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

var currentTime = moment().format("h A");

var tasks = [
  { time: "9:00 AM", event: "" },
  { time: "10:00 AM", event: "" },
  { time: "11:00 AM", event: "" },
  { time: "12:00 PM", event: "" },
  { time: "1:00 PM", event: "" },
  { time: "2:00 PM", event: "" },
  { time: "3:00 PM", event: "" },
  { time: "4:00 PM", event: "" },
  { time: "5:00 PM", event: "" },
];

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


