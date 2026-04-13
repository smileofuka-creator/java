// let name = prompt("Ta neree oruulna uu");
// console.log(name);
// let nas = prompt("${name} ta nasaa oruulan uu");
// console.log(nas);
let op = prompt(
  "ta ymar uildel hiimer bn./*,+,/,-,/ hj blno.\na *, \nb+,\nc/,\nd-",
);
let a = prompt("A toog oruulna uu");
console.log(a);
let b = prompt("B toog oruulna uu");
console.log(b);

function nemeh(a, b) {
  console.log(Number(a) + Number(b));
}
function urjver(a, b) {
  console.log(Number(a) * Number(b));
}
function hasah(a, b) {
  console.log(Number(a) - Number(b));
}
function huvaah(a, b) {
  console.log(Number(a) / Number(b));
}

if (op === "a") {
  urjver(a, b);
} else if (op === "d") {
  hasah(a, b);
} else if (op === "b") {
  nemeh(a, b);
} else if (op === "c") {
  huvaah(a, b);
}

// function plus(a, b) {
//   console.log(a + b);
// }

// function minus(a, b) {
//   console.log(a - b);
// }
// function urjver(a, b) {
//   console.log(a * b);
// }
// function huvaah(a, b) {
//   console.log(a / b);
// }

// plus(15, 34);
// minus(34, 12);
// urjver(3, 5);
// huvaah(18, 6);

// let name = prompt("Ta neree oruulna uu");
// console.log(name);
// let nas = prompt("${name} ta nasaa oruulan uu");
// console.log(nas );
