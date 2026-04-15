let gerel = document.getElementsByClassName("lightoff")[0];
function lightoff() {
  gerel.innerHTML =
    "<img  'onclick='lighton()'  src='./light-on.gif' alt='' />";
}

function lightoff() {
  gerel.innerHTML =
    "<img 'onclick='lightoff()' src='./light-off.gif' alt='' />";
}
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
