// // 1. Дэлгэц дээр тоог залгаж харуулах функц
// function display() {
//   // DOM ашиглан 'result' id-тай элементийг барьж авч байна
//   document.getElementById("result").value += val;
// }

// // 2. Дэлгэцийг цэвэрлэх функц
// function clearScreen() {
//   document.getElementById("result").value = "";
// }

// // 3. Бодох (Тэнцүү) функц
// function calculate() {
//   // Дэлгэц дээр байгаа текстийг авна
//   let x = document.getElementById("result").value;

//   // eval() функц нь текстийг математик бодлого болгож боддог
//   // Жишээ нь: "1+2" гэсэн текстийг 3 болгоно
//   let y = eval(x);

//   // Гарсан хариуг буцаагаад дэлгэцэнд онооно
//   document.getElementById("result").value = y;
// }

// let screen = document.getElementById("display");

// function pressOne() {
//   screen.innerText += "1";
// }

// function pressTwo() {
//   screen.innerText += "2";
// }
// function pressThree() {
//   screen.innerText += "3";
// }
// function pressFour() {
//   screen.innerText += "4";
// }
// function pressFive() {
//   screen.innerText += "5";
// }
// function pressSix() {
//   screen.innerText += "6";
// }
// function pressSeven() {
//   screen.innerText += "7";
// }
// function pressEight() {
//   screen.innerText += "8";
// }
// function pressNine() {
//   screen.innerText += "9";
// }
// function pressZero() {
//   screen.innerText += "0";
// }
// function pressPlus() {
//   screen.innerText += "+";
// }
// function pressMinus() {
//   screen.innerText += "-";
// }
// function pressMultiply() {
//   screen.innerText += "*";
// }
// function pressDivide() {
//   screen.innerText += "/";
// }
// function clearScreen() {
//   screen.innerText = "";
// }
// function pressDot() {
//   screen.innerText += ".";
// }
// function calculate() {
//   let x = screen.innerText;
//   let y = eval(x);
//   screen.innerText = y;
// }

let screen = document.getElementById("display");
let firstNumber = "";
let operator = "";
let secondNumber = "";

function pressOne() {
  if (operator === "") {
    firstNumber = firstNumber + "1";
    screen.innerText = firstNumber;
  } else {
    secondNumber = secondNumber + "1";
    screen.innerText = secondNumber;
  }
}
function pressTwo() {
  if (operator === "") {
    firstNumber = firstNumber + "2";
    screen.innerText = firstNumber;
  } else {
    secondNumber = secondNumber + "2";
    screen.innerText = secondNumber;
  }
}
function pressThree() {
  if (operator === "") {
    firstNumber = firstNumber + "3";
    screen.innerText = firstNumber;
  } else {
    secondNumber = secondNumber + "3";
    screen.innerText = secondNumber;
  }
}
function pressFour() {
  if (operator === "") {
    firstNumber = firstNumber + "4";
    screen.innerText = firstNumber;
  } else {
    secondNumber = secondNumber + "4";
    screen.innerText = secondNumber;
  }
}
function pressFive() {
  if (operator === "") {
    firstNumber = firstNumber + "5";
    screen.innerText = firstNumber;
  } else {
    secondNumber = secondNumber + "5";
    screen.innerText = secondNumber;
  }
}
function pressSix() {
  if (operator === "") {
    firstNumber = firstNumber + "6";
    screen.innerText = firstNumber;
  } else {
    secondNumber = secondNumber + "6";
    screen.innerText = secondNumber;
  }
}
function pressSeven() {
  if (operator === "") {
    firstNumber = firstNumber + "7";
    screen.innerText = firstNumber;
  } else {
    secondNumber = secondNumber + "7";
    screen.innerText = secondNumber;
  }
}
function pressEight() {
  if (operator === "") {
    firstNumber = firstNumber + "8";
    screen.innerText = firstNumber;
  } else {
    secondNumber = secondNumber + "8";
    screen.innerText = secondNumber;
  }
}
function pressNine() {
  if (operator === "") {
    firstNumber = firstNumber + "9";
    screen.innerText = firstNumber;
  } else {
    secondNumber = secondNumber + "9";
    screen.innerText = secondNumber;
  }
}
function pressZero() {
  if (operator === "") {
    firstNumber = firstNumber + "0";
    screen.innerText = firstNumber;
  } else {
    secondNumber = secondNumber + "0";
    screen.innerText = secondNumber;
  }
}
function pressPlus() {
  if (firstNumber !== "") operator = "+";
  screen.innerText = operator;
}
function pressMinus() {
  if (firstNumber !== "") operator = "-";
  screen.innerText = operator;
}
function pressMultiply() {
  if (firstNumber !== "") operator = "*";
  screen.innerText = operator;
}
function pressDivide() {
  if (firstNumber !== "") operator = "/";
  screen.innerText = operator;
}
function clearScreen() {
  firstNumber = "";
  operator = "";
  secondNumber = "";
  screen.innerText = "";
}
function pressDot() {
  if (operator === "") firstNumber = firstNumber + ".";
  screen.innerText = firstNumber;
}

function calculate() {
  let result = 0;

  let num1 = Number(firstNumber) || 0;
  let num2 = Number(secondNumber) || 0;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      screen.innerText = "Error";
      return;
    }
    result = num1 / num2;
  }

  screen.innerText = result;

  firstNumber = result.toString();
  //   firstNumber = result +""; ингэж бас бичиж болдог юм байна
  secondNumber = "";
  operator = "";
}
