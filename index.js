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
function toggleAnswer(element) {
  var answer = element.nextElementSibling;
  answer.style.display = answer.style.display === "block" ? "none" : "block";
}
