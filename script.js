// 1. Санамсаргүй тоо үүсгэх (1-100 хооронд)
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userInput = document.getElementById("userInput").value;
  const message = document.getElementById("message");
  const attemptsDisplay = document.getElementById("attempts");

  // Хоосон утга оруулсан эсэхийг шалгах
  if (userInput === "") {
    message.innerText = "Уучлаарай, тоо оруулна уу!";
    return;
  }

  attempts++; // Оролдлогыг нэгээр нэмнэ
  attemptsDisplay.innerText = attempts;

  const guess = Number(userInput);

  // 2. Тоог харьцуулах нөхцөл
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

// 3. Тоглоомыг шинээр эхлүүлэх функц
function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("attempts").innerText = "0";
  document.getElementById("message").innerText = "";
  document.getElementById("userInput").value = "";
  document.getElementById("resetBtn").style.display = "none";
}
