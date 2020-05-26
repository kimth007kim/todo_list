const timer = document.getElementById("time");

setInterval(function upDate() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var second = date.getSeconds();

  timer.innerHTML =
    year +
    "년" +
    (month + 1) +
    "월" +
    day +
    "일" +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    second;
}, 10);
