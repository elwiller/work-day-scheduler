document.getElementById("currentDay").textContent = moment().format("dddd, MMMM Do");

for (i = 9; i < 18; i++) {
  var timeBlock = $("<div class='row time-block'>");
  var hourLabel = $("<div class='col-1 hour'>");
  var description = $("<div class='col-10 description'>");
  var saveBtn = $("<div class='col-1 saveBtn'>");
  if (i < 12) {
    hourLabel.append($("<p>" + i + "AM</p>"));
  } else if (i = 12) {
    hourLabel.append($("<p>" + i + "PM</p>"));
  } else {
    hourLabel.append($("<p>" + (i - 12) + "PM</p>"));
  };
  description.append($("<textarea id='ta" + i + "'>"));
  saveBtn.append($("<img src='save-icon.png' height='30px'>"));
  timeBlock.append(hourLabel);
  timeBlock.append(description);
  timeBlock.append(saveBtn);
  $("#planner").append(timeBlock);
};
