const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobd = document.querySelector(".mobilenavbar");
hamburger.addEventListener("click", () => {
  bar1.classList.toggle("bar1as");
  bar2.classList.toggle("bar2as");
  bar3.classList.toggle("bar3as");
  mobd.classList.toggle("opennavmob");
});
function toggleAnswer(questionElement) {
  const answer = questionElement.nextElementSibling;
  if (answer.style.display === "block") {
    answer.style.display = "none";
  } else {
    answer.style.display = "block";
  }
}
function toggleTable() {
  var table = document.getElementById("web-dev-table");
  if (table.style.display === "none") {
    table.style.display = "table";
  } else {
    table.style.display = "none";
  }
}
function toggleTable(tableId) {
  var table = document.getElementById(tableId);
  if (table.style.display === "none" || table.style.display === "") {
    table.style.display = "table";
  } else {
    table.style.display = "none";
  }
}
function updateCountdown() {
  const now = new Date();
  const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
  const timeRemaining = endOfDay - now;

  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById('countdown-timer').textContent = `${hours}h ${minutes}m ${seconds}s`;

  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown-timer').textContent = "Registration Closed";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
function toggleAnswer(element) {
  var answer = element.nextElementSibling;
  answer.style.display = answer.style.display === "block" ? "none" : "block";
}
