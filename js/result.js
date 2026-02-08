let s = +localStorage.getItem("score");
let t = +localStorage.getItem("total");
let p = Math.round((s / t) * 100);

document.getElementById("score").innerText = `Score: ${s}/${t}`;
document.getElementById("percentage").innerText = `Percentage: ${p}%`;

let gradeText = "";
if (p >= 90) gradeText = "A+";
else if (p >= 80) gradeText = "A";
else if (p >= 70) gradeText = "B";
else if (p >= 60) gradeText = "C";
else if (p >= 50) gradeText = "D";
else gradeText = "Fail";

document.getElementById("grade").innerText = `Grade: ${gradeText}`;

const playBtn = document.getElementById("playAgainBtn");

// Sirf B, C, D, Fail par show hoga
if (p < 70) {
  playBtn.style.display = "inline-block";
}

playBtn.onclick = () => {
  history.back(); // same quiz dobara
};