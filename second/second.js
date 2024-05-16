// 3번 문제  // 이거 오류 문제 해결 해야됨
window.addEventListener("scroll", function () {
  console.log(scrolly);
});

//4번 문제
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 5번 문제
for (let i = 1; i <= 20; i++) {
  result = i % 2 === 0;
  if (result === true) {
    console.log(i);
  }
}

// 6번 문제
setTimeout(function () {
  console.log("3초 후에 출력되는 텍스트입니다");
}, 3000);
