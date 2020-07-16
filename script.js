// set day and check local storage for eventLog
document.getElementById("currentDay").textContent = moment().format("dddd, MMMM Do");
if (localStorage.getItem("eventLog")) {
  var eventLog = JSON.parse(localStorage.getItem("eventLog"));
} else {
  var eventLog = [];
};

// display the planner
function displayPlanner() {
  for (var i = 0; i < 9; i++) {
    var timeBlock = $("<div class='row time-block no-gutters'>");
    var hourLabel = $("<div class='col-1 hour'>");
    var description = $("<div class='col-10 description'>");
    var saveBtn = $("<div class='col-1 saveBtn' id='saveBtn" + i + "'>");
    if (i < 3) {
      hourLabel.append($("<p>" + (i + 9) + "AM</p>"));
    } else if (i == 3) {
      hourLabel.append($("<p>12PM</p>"));
    } else {
      hourLabel.append($("<p>" + (i - 3) + "PM</p>"));
    };
    description.append($("<textarea id='textarea" + i + "'>"));
    saveBtn.append($("<img src='save-icon.png' height='30px'>"));
    timeBlock.append(hourLabel);
    timeBlock.append(description);
    timeBlock.append(saveBtn);
    $("#planner").append(timeBlock);
    if (parseInt(moment().format("H")) < (i + 9)) {
      document.getElementById(`textarea${i}`).className = "future";
    } else if (parseInt(moment().format("H")) === (i + 9)) {
      document.getElementById(`textarea${i}`).className = "present";
    } else {
      document.getElementById(`textarea${i}`).className = "past";
    };
    if (eventLog[i] != undefined) {
      document.getElementById(`textarea${i}`).innerHTML = eventLog[i];
    };
  }; 
};

displayPlanner();

// event listeners for saveBtn
$(".saveBtn").on({
  mouseover: function() {
    $(".saveBtn").css('cursor', 'pointer');
  },
  
  click: function() {
    eventLog[this.id[7]] = document.getElementById(`textarea${this.id[7]}`).value;
    localStorage.setItem("eventLog", JSON.stringify(eventLog));
  }
});

