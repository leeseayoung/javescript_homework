// 7번 문제
const counter = document.querySelector(".counter");
//이것도 질문
let count = parseInt(counter.textContent);

const intervalId = setInterval(function () {
  count = count + 1;
  if (count === 5) {
    console.log("종료!");
    clearInterval(intervalId);
  }
  counter.textContent = count;
}, 1000);
