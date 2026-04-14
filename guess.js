let guess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function check(params) {
  input = document.getElementById("input");
  message = document.getElementById("message");
  attemptsDisplay = document.getElementById("attempts");

  if (input === "") {
    message.innerText = "Уучлаарай тоо оруулна уу...";
  } else {
    attempts = attempts + 1;
    attemptsDisplay.innerText = attempts;
    const guess = Number(input);
  }
  if (guess === randomNumber) {
    message.innerText = `Баяр хүргэе! Та ${attempts} оролдлогоор тоог таалаа! 🎉`;
    message.style.color = "green";
    document.getElementById("resetBtn").style.display = "block"; // Дахин эхлэх товчийг гаргах
  } else if (guess > randomNumber) {
    message.innerText = "Их байна! Бага тоо оруулна уу. 👇";
    message.style.color = "blue";
  } else {
    message.innerText = "Бага байна! Их тоо оруулна уу. 👆";
    message.style.color = "red";
  }
}
