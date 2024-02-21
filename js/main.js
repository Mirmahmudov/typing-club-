const text1 = document.querySelector(".text1");
const input1 = document.querySelector(".input1");
const score = document.querySelector(".score");
const time1 = document.querySelector(".time1");
const modal = document.querySelector(".modal");
const text3 = document.querySelector(".text3");
const select = document.querySelector(".select");
const HightScore = document.querySelector(".HightScore");

const words = [
  "abreact",
  "abreacted",
  "abreacting",
  "abreaction",
  "abreactions",
  "paltrier",
  "paltriest",
  "paltrily",
  "paltriness",
  "paltrinesses",
  "paltry",
  "paludal",
  "paludism",
  "shiv",
  "shiva",
  "shivah",
  "shivahs",
  "shivaree",
  "shivareed",
  "shivareeing",
];

var scoreValue = 0;
var timeNumber = 10;
var level = localStorage.getItem("level")
  ? localStorage.getItem("level")
  : "Easy";

const writeText = () => {
  var num = Math.floor(Math.random() * words.length);
  var randomText = words[num];
  text1.textContent = randomText;
};

writeText();

input1.addEventListener("input", () => {
  if (input1.value == text1.textContent) {
    writeText();
    scoreValue++;
    score.textContent = scoreValue;
    input1.value = "";
    if (level == "Easy") {
      timeNumber += 5;
      time1.innerHTML += "<span>+5</span>";
    } else if (level == "Medium") {
      timeNumber += 3;
      time1.innerHTML += "<span>+3</span>";
    } else if (level == "Hard") {
      timeNumber += 2;
      time1.innerHTML += "<span>+2</span>";
    }
  }
});

select.addEventListener("change", () => {
  level = select.value;
  localStorage.setItem("level", select.value);
});

if(localStorage.getItem("level")){
    select.value = localStorage.getItem("level")
}

time1.textContent = timeNumber;

const interval = setInterval(() => {
  if (timeNumber != 0) {
    timeNumber--;
    time1.textContent = timeNumber;
  } else {
    clearInterval(interval);
    modal.classList.add("active");
    text3.textContent = `Your result: ${scoreValue}`;
    if (localStorage.getItem("highScore") < scoreValue) {
      localStorage.setItem("highScore", scoreValue);
    }
  }
}, 1000);
HightScore.textContent = "5";

// localStorage.getItem("highScore")?localStorage.getItem("highScore"):"0"
if (localStorage.getItem("highScore")) {
  HightScore.textContent = localStorage.getItem("highScore");
} else {
  HightScore.textContent = 0;
}
