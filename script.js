document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector(".title").innerHTML = "제목 아니다.";
});
// 문제3) 함수
function sum(num1, num2) {
  let result = num1 + num2;
  console.log(`합계: ${result}`);
}
sum(5, 3);

function isEvenOrOdd(num3) {
  if (num3 % 2 === 0) {
    console.log("짝수입니다");
  } else {
    console.log("홀수입니다");
  }
}
isEvenOrOdd(2);

//문제5)
const name = "이세영";
const age = "27";

console.log(`이름: ${name}
나이: ${age}`);
