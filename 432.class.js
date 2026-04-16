// let gerel = document.getElementsByClassName("lightoff")[0];
// function lightoff() {
//   gerel.innerHTML = "<img  onclick='lighton()'  src='./light-on.gif' alt='' />";
// }

// let untar = document.getElementsByClassName("lighton")[0];
// function lighton() {
//   untar.innerHTML = "<img src='./light-off.gif' alt='' />";
// }
//   if (lightoff) {
//     gerel.innerHTML = "<img src='./light-on.gif' alt='' />";
//   } else {
//     gerel.innerHTML = "<img src='./light-off.gif' alt='' />";
//   }
// }

// let untar = document.getElementsByClassName("lightom")[0];

// function lighton() {
//   untar.innerHTML = "<img src='./light-off.gif' alt='' />";
// }
// //

function switchLight() {
  let container = document.getElementsByClassName("Lightoff")[0];

  // Хэрэв одоо байгаа зураг нь 'light-off' бол асаана
  if (container.innerHTML.includes("light-off.gif")) {
    container.innerHTML =
      '<img onclick="switchLight()" src="./light-on.gif" alt="Light On" />';
  } else {
    3;
    // Үгүй бол унтраана
    container.innerHTML =
      '<img onclick="switchLight()" src="./light-off.gif" alt="Light Off" />';
  }
}
