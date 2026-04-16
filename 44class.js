// // 1. Тоглогчийн ээлж болон тоглоомын төлөвийг хадгалах
// let currentPlayer = "X"; // Эхлээд X тоглогч эхэлнэ
// let gameActive = true;
// let gameState = ["", "", "", "", "", "", "", "", ""]; // 9 нүдний утга

// // 2. Ялах боломжит хувилбарууд (индексээр)
// const winningConditions = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8], // Хэвтээ
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8], // Босоо
//   [0, 4, 8],
//   [2, 4, 6], // Диагональ
// ];

// // 3. Бүх нүднүүдийг сонгож авах
// // Таны HTML бүтцээс хамаарч .grid-container доторх бүх div-ийг авна
// const cells = document.querySelectorAll(".grid-container > div");

// // 4. Нүд бүр дээр дарах үйлдэл нэмэх
// cells.forEach((cell, index) => {
//   cell.addEventListener("click", () => {
//     // Хэрэв нүд хоосон бөгөөд тоглоом дуусаагүй бол
//     if (gameState[index] === "" && gameActive) {
//       makeMove(cell, index);
//       checkResult();
//     }
//   });
// });

// // 5. Нүүдэл хийх функц
// function makeMove(cell, index) {
//   gameState[index] = currentPlayer;
//   cell.innerText = currentPlayer;
//   cell.style.color = currentPlayer === "X" ? "#33ccff" : "#ffcc00"; // X-цэнхэр, O-шар

//   // Дараагийн тоглогч руу шилжих
//   currentPlayer = currentPlayer === "X" ? "O" : "X";
// }

// // 6. Ялагчийг шалгах функц
// function checkResult() {
//   let roundWon = false;

//   for (let i = 0; i < winningConditions.length; i++) {
//     const [a, b, c] = winningConditions[i];
//     if (
//       gameState[a] &&
//       gameState[a] === gameState[b] &&
//       gameState[a] === gameState[c]
//     ) {
//       roundWon = true;
//       break;
//     }
//   }

//   if (roundWon) {
//     alert(`Баяр хүргэе! Тоглогч ${currentPlayer === "X" ? "O" : "X"} яллаа!`);
//     gameActive = false;
//     return;
//   }

//   // Тэнцсэн эсэхийг шалгах
//   if (!gameState.includes("")) {
//     alert("Тэнцлээ!");
//     gameActive = false;
//   }
// }

// Бүх нүдийг сонгож авах
// const cells = document.querySelectorAll(".grid-container > div");

// cells.forEach((cell, index) => {
//   // Энэ бол JavaScript-ээр дамжуулж буй onclick үйлдэл юм
//   cell.onclick = function () {
//     console.log("Нүдний дугаар: " + index);
//     if (cell.innerText === "") {
//       cell.innerText = "X"; // Жишээ нь X-ийг гаргах
//     }
//   };
// });

// 1. Ээлжийг хадгалах хувьсагч (тоглогч солигдоход ашиглана)
let turn = "X";

// 2. Бүх нүднүүдийг сонгож авах
const cells = document.querySelectorAll(".grid-container > div");

// 3. Нүд бүр дээр onclick үйлдэл нэмэх
cells.forEach((cell, index) => {
  cell.onclick = function () {
    // Зөвхөн хоосон нүдэн дээр дарахад ажиллана
    if (cell.innerText === "") {
      // Одоогийн тоглогчийн тэмдэгтийг (X эсвэл O) нүдэнд бичнэ
      cell.innerText = turn;

      // Консол дээр мэдээлэл хэвлэх
      console.log("Нүдний дугаар: " + index + ", Тэмдэгт: " + turn);

      // CSS өнгийг тоглогчоос хамаарч өөрчлөх (Сонголттой)
      if (turn === "X") {
        cell.style.color = "#33ccff"; // X нь цэнхэр
        turn = "O"; // Дараагийн ээлж O
      } else {
        cell.style.color = "#ffcc00"; // O нь шар
        turn = "X"; // Дараагийн ээлж X
      }
    } else {
      console.log("Энэ нүд аль хэдийн бөглөрсөн байна!");
    }
  };
});
