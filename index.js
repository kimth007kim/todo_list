const timer = document.getElementById("time");

setInterval(function upDate() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var second = date.getSeconds();

  // if (month < 10) {
  //   month = "0" + month;
  // }
  // if (day < 10) {
  //   day = "0" + day;
  // }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (second < 10) {
    second = "0" + second;
  }
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

function plustodo() {
  var plusdiv = document.createElement("div"); //plusdiv변수에 createElement를 사용해 생성할 엘리먼트를 담는다.
  plusdiv.classList.add("plusdiv");
  plusdiv.innerHTML =
    '<span><button class="delete" onclick="deletebtn(this)">-</button></span><input type="text" class="textTodo__Big" name="member_name" placeholder="할일을 입력해주세요" /><input type="text" class="textTodo__Small" name="member_name" placeholder="할일에 대한 설명을 입력해주세요"/>'; //추가할 plusdiv 엘리먼트 안의 내용을 정의한다.
  document.getElementById("todolist").appendChild(plusdiv); //appendChild로 이전에 정의한 plusUI 변수의 내용을 실제 추가한다.
}

function deletebtn(obj) {
  var tr = obj.parentNode.parentNode;
  tr.parentNode.removeChild(tr);
}
