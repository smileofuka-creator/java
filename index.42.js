// let morning = prompt("Та сайхан амарсан уу?");
// console.log(morning);
// let a = prompt("дахин өглөөг элүүлцгээе. Өглөө ямар байна?");
// console.log(a);
// let b = prompt("За гараад тэгээд хаачих гэж байна?");
// console.log(b);

//

//useg solih
function usegSolih(haihUseg, solihUseg, ug) {
  let string = "";
  let usegOrsn = false;
  for (let i = 0; i < ug.length; i++) {
    if (ug[i] === haihUseg && !usegOrsn) {
      string += solihUseg;
      usegOrsn = true;
    } else {
      string += ug[i];
    }
  }
  console.log(string);
}

usegSolih("e", "a", "bileguudei");

let message = document.getElementById("greetings");
greetings.textContent = "За сайн уу за тэгнээ тэгнэ хахэ?";

let hairtsag = document.getElementById("box");
hairtsag.innerHTML =
  "<h2>Za bi yr n yu hiigd bnaa hahaq</h2><h3>uuruu bichih ymar balai yum be</h3>";
